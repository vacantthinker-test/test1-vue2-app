const {execSync} = require('child_process')
const queueCommand = [
	'git remote add origin git@github.com:vacantthinker-test/test1-vue2-app.git',
	'git branch -M main',
	'git push -u origin main'
]
queueCommand.forEach(item => execSync(item))
