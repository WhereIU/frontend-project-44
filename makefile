setup: install rules publish link

install:
	npm ci

rules:
	chmod +x bin/brain-games.js
	chmod +x bin/brain-even.js

publish:
	npm publish --dry-run

link:
	npm link

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: setup install rules publish link brain-games brain-even lint lint-fix