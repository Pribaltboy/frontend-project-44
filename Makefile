install: 
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint
Even-game:
	node bin/brain-even.js