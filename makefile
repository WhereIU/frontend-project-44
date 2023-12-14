setup: install +x-chmod publish link

install:
	npm ci

+x-chmod:
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

brain-gcd:
	node bin/brain-gcd.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: setup install +x-chmod publish link brain-games brain-even brain-calc brain-gcd lint lint-fix