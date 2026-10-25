#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -e

echo "===> Installing Python backend dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

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
