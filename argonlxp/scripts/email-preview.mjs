#!/usr/bin/env node

// This is a standalone script to launch the email preview server
// Run with: node scripts/email-preview.mjs

import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

try {
  console.log('Starting React Email preview server...');
  
  // Launch email preview on port 3001
  exec('npx email dev --dir emails --port 3001', 
    { cwd: rootDir },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting email preview: ${error.message}`);
        return;
      }
      
      if (stderr) {
        console.error(`Email preview stderr: ${stderr}`);
        return;
      }
      
      console.log(stdout);
    }
  );
} catch (error) {
  console.error('Failed to start email preview server:', error);
}
