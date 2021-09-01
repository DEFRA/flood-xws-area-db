FROM postgis/postgis
ENV PATH=${PATH}:/scripts
COPY scripts/populate-db /docker-entrypoint-initdb.d/populate-db.sh
WORKDIR /db-init-scripts
COPY area/flood-areas/faa.sql .
COPY area/flood-areas/fwa.sql .
COPY scripts/before.sql .
COPY area/scripts ./area
