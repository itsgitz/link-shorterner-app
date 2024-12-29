local_database_compose_file = "./scripts/docker/docker-compose.database.local.yml"

run-local-containers:
	docker compose -f $(local_database_compose_file) \
		up --build --force-recreate -d

destroy-local-containers:
	docker compose -f $(local_database_compose_file) \
		down -v

psql-local:
	docker compose -f $(local_database_compose_file) \
		exec db psql -U postgres
