import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  Trash2,
  AlertTriangle,
  RotateCcw,
  FileText,
  ShieldAlert,
  HelpCircle,
  Activity,
  CheckCircle2,
  Info,
  ChevronRight,
  Key,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ReportAudit, BiomarkerRecord } from '../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  hasReportContext?: boolean;
}

interface AssistantViewProps {
  currentReport: ReportAudit | null;
  history: ReportAudit[];
  onSelectReport: (report: ReportAudit) => void;
  onNavigateAnalyze: () => void;
}

export const AssistantView: React.FC<AssistantViewProps> = ({
  currentReport,
  history,
  onSelectReport,
  onNavigateAnalyze,
}) => {
  const { t, language, currentLanguageInfo } = useLanguage();

  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem('orca_assistant_history');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 'welcome',
        role: 'assistant',
        content: `Welcome to the Orca MedScan Clinical Decision-Support Assistant. I can help explain your laboratory biomarker results, clarify reference intervals, and prepare questions for your physician in ${currentLanguageInfo.nativeName} (${currentLanguageInfo.name}). How can I assist with your lab results today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasReportContext: false,
      },
    ];
  });

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [includeContext, setIncludeContext] = useState<boolean>(true);
  const [isGroqConfigured, setIsGroqConfigured] = useState<boolean | null>(null);
  const [groqModel, setGroqModel] = useState<string>('llama-3.3-70b-versatile');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check Groq status on mount
  useEffect(() => {
    fetch('/api/assistant/status')
      .then((res) => res.json())
      .then((data) => {
        setIsGroqConfigured(data.configured);
        if (data.model) setGroqModel(data.model);
      })
      .catch(() => setIsGroqConfigured(false));
  }, []);

  // Save conversation history
  useEffect(() => {
    try {
      localStorage.setItem('orca_assistant_history', JSON.stringify(messages));
    } catch (e) {
      console.error('Error saving chat history:', e);
    }
  }, [messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputPrompt).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      hasReportContext: includeContext && !!currentReport,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputPrompt('');
    setIsLoading(true);
    setErrorMessage(null);

    // Prepare non-identifying report payload
    let reportPayload: any = null;
    if (includeContext && currentReport) {
      reportPayload = {
        source_name: currentReport.source_name,
        source_type: currentReport.source_type,
        total_count: currentReport.total_count,
        normal_count: currentReport.normal_count,
        flagged_count: currentReport.flagged_count,
        records: currentReport.records.map((r: BiomarkerRecord) => ({
          test_name: r['Test Name'],
          measured_value: r['Measured Value'],
          unit: r.Unit,
          reference_range: r['Reference Range'],
          status: r.Status,
          plain_explanation: r['Plain Explanation'],
        })),
      };
    }

    try {
      const res = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          language: currentLanguageInfo.name,
          report_context: reportPayload,
        }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        setErrorMessage(data.detail || 'Assistant communication error occurred.');
        return;
      }

      if (data.configured === false) {
        setIsGroqConfigured(false);
      } else {
        setIsGroqConfigured(true);
      }

      const assistantMessage: Message = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasReportContext: data.has_report_context,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(`Network error communicating with clinical assistant: ${err.message}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    const welcome: Message = {
      id: `welcome-${Date.now()}`,
      role: 'assistant',
      content: `Conversation reset. How can I help clarify your laboratory results in ${currentLanguageInfo.nativeName} (${currentLanguageInfo.name})?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      hasReportContext: false,
    };
    setMessages([welcome]);
    setErrorMessage(null);
    localStorage.removeItem('orca_assistant_history');
  };

  const dynamicSuggestedPrompts = [
    t('asst_prompt_1'),
    t('asst_prompt_2'),
    `Summarize the key findings in ${currentLanguageInfo.nativeName}.`,
    t('asst_prompt_4'),
  ];

  return (
    <div className="space-y-6 animate-fade-in font-sans">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Clinical Intelligence
            </span>
            <span className="text-charcoal-400">/</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-forest-100 dark:bg-forest-950 text-forest-900 dark:text-forest-300 font-semibold">
              <Sparkles className="w-3 h-3 text-forest-700 dark:text-forest-400" />
              Groq Cloud ({groqModel})
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
            {t('asst_title')}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
            {t('asst_subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleClearChat}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 text-charcoal-700 dark:text-ivory-300 hover:border-forest-600 text-xs font-mono font-bold hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory"
            title="Reset conversation"
          >
            <Trash2 className="w-3.5 h-3.5 text-charcoal-400" />
            <span>{t('asst_clear')}</span>
          </button>
        </div>
      </div>

      {/* Medical Safety Disclaimer Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3 shadow-paper-ivory">
        <ShieldAlert className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          <strong className="font-semibold">{t('asst_banner_disclaimer')}</strong>
          <span className="block text-[11px] text-amber-800/80 dark:text-amber-300/80 mt-0.5">
            {t('asst_privacy_notice')}
          </span>
        </div>
      </div>

      {/* Groq Unconfigured Alert Banner */}
      {isGroqConfigured === false && (
        <div className="p-4 rounded-2xl bg-forest-50 dark:bg-forest-950/60 border border-forest-200 dark:border-forest-800 flex items-start justify-between gap-4 shadow-paper-ivory">
          <div className="flex items-start gap-3">
            <Key className="w-5 h-5 text-forest-700 dark:text-forest-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-forest-950 dark:text-forest-100">
                {t('asst_groq_missing_title')}
              </h4>
              <p className="text-[11px] text-forest-800 dark:text-forest-300 mt-1 leading-relaxed">
                {t('asst_groq_missing_desc')}
              </p>
              <div className="mt-2 text-[11px] font-mono text-forest-900 dark:text-forest-200 bg-forest-100/60 dark:bg-forest-900/40 px-2.5 py-1 rounded-lg inline-block">
                export GROQ_API_KEY="gsk_..."
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Interface + Report Context Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Conversation Column */}
        <div className="lg:col-span-8 flex flex-col h-[640px] rounded-3xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory overflow-hidden">
          {/* Active Context Bar in Chat */}
          <div className="px-5 py-3 border-b border-ivory-200 dark:border-charcoal-800 bg-ivory-50/70 dark:bg-charcoal-950/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 truncate">
              <Activity className="w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0" />
              {currentReport ? (
                <div className="truncate">
                  <span className="font-bold text-charcoal-900 dark:text-ivory-100">
                    {currentReport.source_name}
                  </span>
                  <span className="text-charcoal-400 mx-1.5">•</span>
                  <span className="font-mono text-[11px] text-forest-700 dark:text-forest-400">
                    {currentReport.total_count} {t('asst_context_records')} ({currentReport.flagged_count} flagged)
                  </span>
                </div>
              ) : (
                <span className="text-charcoal-500 dark:text-ivory-400">
                  {t('asst_context_none')}
                </span>
              )}
            </div>

            {currentReport && (
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-mono text-charcoal-600 dark:text-ivory-300 shrink-0">
                <input
                  type="checkbox"
                  checked={includeContext}
                  onChange={(e) => setIncludeContext(e.target.checked)}
                  className="rounded text-forest-700 focus:ring-forest-600 w-3.5 h-3.5"
                />
                <span>Attach Report</span>
              </label>
            )}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            {messages.map((m) => {
              const isUser = m.role === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs shadow-paper-ivory ${
                      isUser
                        ? 'bg-charcoal-800 text-ivory-50'
                        : 'bg-forest-800 text-ivory-50'
                    }`}
                  >
                    {isUser ? '👤' : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[82%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      isUser
                        ? 'bg-forest-800 text-ivory-50 rounded-tr-none shadow-paper-ivory'
                        : 'bg-ivory-100 dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 rounded-tl-none border border-ivory-200 dark:border-charcoal-700'
                    }`}
                  >
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-4 mb-1.5 pb-1 border-b border-ivory-200/40 dark:border-charcoal-700/60 text-[10px] font-mono opacity-80">
                      <span>{isUser ? 'Practitioner / Patient' : 'Clinical AI Decision-Support'}</span>
                      <span>{m.timestamp}</span>
                    </div>

                    {/* Content */}
                    <div className="whitespace-pre-wrap font-sans text-xs leading-relaxed">
                      {m.content}
                    </div>

                    {/* Context badge if report was attached */}
                    {!isUser && m.hasReportContext && (
                      <div className="mt-2 pt-1.5 border-t border-ivory-200/50 dark:border-charcoal-700 text-[10px] font-mono text-forest-800 dark:text-forest-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-forest-700" />
                        Cross-referenced against verified report values
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-forest-800 flex items-center justify-center text-ivory-50 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl rounded-tl-none bg-ivory-100 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 text-xs text-charcoal-600 dark:text-ivory-300 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-forest-700 animate-ping"></div>
                  <span>{t('asst_loading')}</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center justify-between">
                <span>{errorMessage}</span>
                <button
                  onClick={() => handleSend()}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-900/60 font-mono font-bold text-[10px] hover:bg-rose-200 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Retry
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Clinical Prompts */}
          <div className="px-5 py-2.5 bg-ivory-50/50 dark:bg-charcoal-950/40 border-t border-ivory-200 dark:border-charcoal-800 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-[10px] font-mono uppercase text-charcoal-400 font-bold shrink-0">
                Suggested:
              </span>
              {dynamicSuggestedPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-charcoal-800 border border-ivory-300 dark:border-charcoal-700 hover:border-forest-600 text-charcoal-700 dark:text-ivory-200 text-[11px] font-sans hover:bg-ivory-100 transition-all truncate max-w-xs shadow-paper-ivory"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Message Composer */}
          <div className="p-4 bg-white dark:bg-charcoal-900 border-t border-ivory-200 dark:border-charcoal-800">
            <div className="relative flex items-end gap-2">
              <textarea
                ref={textareaRef}
                rows={2}
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('asst_placeholder')}
                disabled={isLoading}
                className="flex-1 p-3 rounded-2xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs focus:outline-none focus:ring-2 focus:ring-forest-600 resize-none font-sans"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !inputPrompt.trim()}
                className="h-10 px-4 rounded-2xl bg-forest-800 hover:bg-forest-900 disabled:opacity-50 text-ivory-50 font-bold text-xs transition-all shadow-paper-ivory flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{t('asst_send')}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-charcoal-400 mt-2 font-mono">
              <span>Enter to send • Shift+Enter for newline</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-forest-700" />
                Response Language: <b>{currentLanguageInfo.nativeName} ({currentLanguageInfo.name})</b>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Context Report Panel & Guidelines */}
        <div className="lg:col-span-4 space-y-5">
          {/* Active Report Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800">
              <h3 className="font-serif font-bold text-base text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
                <FileText className="w-4 h-4 text-forest-700 dark:text-forest-400" />
                Audited Report
              </h3>
              {currentReport && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-100 dark:bg-forest-950 text-forest-900 dark:text-forest-300 font-bold">
                  {currentReport.source_type}
                </span>
              )}
            </div>

            {currentReport ? (
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-xs text-charcoal-800 dark:text-ivory-100 truncate">
                    {currentReport.source_name}
                  </h4>
                  <p className="text-[11px] font-mono text-charcoal-500 mt-0.5">
                    Screened: {currentReport.timestamp}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 rounded-xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                    <span className="text-[9px] text-charcoal-400 uppercase font-bold">Total</span>
                    <p className="font-bold text-sm text-charcoal-900 dark:text-ivory-50">{currentReport.total_count}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                    <span className="text-[9px] text-clinical-danger uppercase font-bold">Flags</span>
                    <p className="font-bold text-sm text-clinical-danger">{currentReport.flagged_count}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                    <span className="text-[9px] text-clinical-normal uppercase font-bold">Normal</span>
                    <p className="font-bold text-sm text-clinical-normal">{currentReport.normal_count}</p>
                  </div>
                </div>

                {/* Priority Flagged Indicators in report context */}
                {currentReport.flagged_count > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-charcoal-400">
                      Flagged Biomarkers:
                    </span>
                    <div className="max-h-40 overflow-y-auto space-y-1 pr-1">
                      {currentReport.records
                        .filter((r) => r.Category === 'flagged')
                        .slice(0, 5)
                        .map((rec, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleSend(`Why is my ${rec['Test Name']} measured at ${rec['Measured Value']} ${rec.Unit} flagged as ${rec.Status}?`)}
                            className="p-2 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 cursor-pointer hover:border-forest-600 transition-all text-left"
                            title="Click to ask AI about this biomarker"
                          >
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-charcoal-900 dark:text-ivory-100">{rec['Test Name']}</span>
                              <span className="font-mono text-[10px] text-clinical-danger font-bold">{rec.Status}</span>
                            </div>
                            <div className="text-[10px] font-mono text-charcoal-500 mt-0.5">
                              {rec['Measured Value']} {rec.Unit} (Ref: {rec['Reference Range']})
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center text-charcoal-400 space-y-2">
                <Info className="w-8 h-8 text-charcoal-400 mx-auto" />
                <p className="text-xs">No active report loaded.</p>
                <button
                  onClick={onNavigateAnalyze}
                  className="px-3.5 py-1.5 rounded-xl bg-forest-800 text-ivory-50 text-xs font-bold shadow-paper-ivory"
                >
                  Analyze a Report
                </button>
              </div>
            )}
          </div>

          {/* Safety & Protocol Guide */}
          <div className="p-5 rounded-3xl bg-ivory-100 dark:bg-charcoal-950 border border-ivory-300 dark:border-charcoal-800 space-y-3 text-xs leading-relaxed">
            <h4 className="font-serif font-bold text-sm text-charcoal-900 dark:text-ivory-50 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-forest-700 dark:text-forest-400" />
              AI Clinical Scope & Privacy
            </h4>
            <ul className="space-y-2 text-[11px] text-charcoal-600 dark:text-ivory-400">
              <li className="flex items-start gap-1.5">
                <span className="text-forest-700 font-bold">•</span>
                <span><strong>No Diagnoses:</strong> Explanations describe physiological markers, not medical diagnostic conclusions.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-forest-700 font-bold">•</span>
                <span><strong>No Prescriptions:</strong> Medication dosage changes must only be directed by licensed doctors.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-forest-700 font-bold">•</span>
                <span><strong>Minimal Payload:</strong> Only extracted test names and numbers are shared with Groq Cloud. Raw document files are never transmitted.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
