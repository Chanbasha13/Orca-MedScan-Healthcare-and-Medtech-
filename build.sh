#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -e

echo "===> Installing Python backend dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Ensure Tesseract portable binary and traineddata are present and executable
mkdir -p bin tessdata

if [ -f bin/tesseract ]; then
  chmod +x bin/tesseract
  echo "===> Verified bin/tesseract executable permissions."
else
  echo "===> Downloading portable Linux Tesseract OCR binary..."
  curl -L -s https://github.com/mikhailgarber/tesseract-portable/releases/download/v5.5.3_4/tesseract-5.5.3_4-x64-linux-portable.tar.gz | tar -xz -C bin --strip-components=1 bin/tesseract
  chmod +x bin/tesseract
fi

if [ ! -f tessdata/eng.traineddata ]; then
  echo "===> Downloading English OCR training data (eng.traineddata)..."
  curl -L -s https://github.com/tesseract-ocr/tessdata_fast/raw/main/eng.traineddata -o tessdata/eng.traineddata
fi

# If node and npm are available in environment, build the frontend
if command -v npm >/dev/null 2>&1; then
  echo "===> Building React frontend with Vite..."
  cd frontend
  npm install
  npm run build
  cd ..
else
  echo "===> npm not found in environment; using pre-built distribution in frontend/dist"
fi

echo "===> Build completed successfully!"
