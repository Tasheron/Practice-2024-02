USER=root
PASSWORD=root
DB=course_work

.PHONY: all app clean

init:
	cp .env.example .env
	cp docker/.env.example docker/.env
	composer install
	npm install
	npm run dev
	php artisan key:generate
	cd docker && docker-compose exec app bash -c "php artisan migrate && exit"

up:
	cd docker && docker-compose up -d

down:
	cd docker && docker-compose down

app:
	cd docker && docker-compose exec app bash
css:
	npm run dev

db:
	cd docker && docker-compose exec db bash -c "mysql -u$(USER) -p$(PASSWORD) $(DB)"
dbs:
	cd docker && docker-compose exec db bash

build:
	cd docker && docker-compose build

build-clear:
	cd docker && docker-compose build --no-cache
