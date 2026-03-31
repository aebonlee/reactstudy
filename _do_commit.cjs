const { execSync } = require('child_process');
const opts = { cwd: 'D:/dreamit-web/reactStudy', encoding: 'utf8', stdio: 'pipe' };

// Stage everything
console.log(execSync('git add -A', opts));

// Verify status
console.log('=== Status after staging ===');
console.log(execSync('git status', opts));

// Commit
const msg = 'JSX to TSX TypeScript migration\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>';
console.log(execSync('git commit -m "' + msg + '"', opts));

// Push
console.log('=== Pushing... ===');
console.log(execSync('git push', { ...opts, timeout: 60000 }));
console.log('=== Done! ===');
