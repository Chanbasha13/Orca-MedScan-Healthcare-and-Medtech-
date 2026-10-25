import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Orca MedScan ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    } else {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] w-full flex items-center justify-center p-6 bg-ivory-50 dark:bg-charcoal-900 rounded-3xl border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory text-charcoal-900 dark:text-ivory-50">
          <div className="max-w-md w-full text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800/60 flex items-center justify-center text-amber-700 dark:text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-100">
                {this.props.fallbackTitle || 'Component Recovery State'}
              </h3>
              <p className="text-xs text-charcoal-600 dark:text-ivory-300 leading-relaxed">
                {this.props.fallbackMessage ||
                  'An unexpected interface error occurred. The application remains active and safe.'}
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-ivory-200/60 dark:bg-charcoal-950 text-left font-mono text-[10px] text-charcoal-700 dark:text-ivory-400 overflow-x-auto max-h-24">
                {String(this.state.error.message || this.state.error)}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Recover Component</span>
              </button>
              <button
                onClick={() => (window.location.href = '/?view=dashboard')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 text-xs font-bold transition-all"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Return to Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

