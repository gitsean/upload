default:
	docker-compose build
	docker-compose run ailabs start

start:
	default

test:
	docker-compose build
	docker-compose run ailabs test
	

	