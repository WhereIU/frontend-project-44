setup: install +x-chmod publish link

install:
	npm ci

+x-chmod:
	chmod +x bin/brain-games.js
	chmod +x bin/brain-even.js
	chmod +x bin/brain-calc.js
	chmod +x bin/brain-progression.js

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

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node /bin/brain-progression.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: setup install +x-chmod publish link brain-games brain-even brain-calc brain-gcd brain-progression lint lint-fix