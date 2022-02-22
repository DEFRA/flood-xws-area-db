TRUNCATE xws_area.area RESTART IDENTITY CASCADE;

-- Insert the faa into the area table
INSERT INTO xws_area.area(code, ea_owner_id, ea_area_id, name, description, river_sea, type_id, category_id, local_authority_name, quick_dial_code, geom, centroid, bounding_box)
SELECT fws_tacode AS code,
       SUBSTRING(fws_tacode, 1, 3) AS owner_id,
       (SELECT ea_area_id from xws_area.ea_owner where id = SUBSTRING(fws_tacode, 1, 3)) AS ea_area_id,
       ta_name AS name,
       descrip AS description,
       river_sea,
       LOWER(SUBSTRING(fws_tacode, 6, 1)) AS type_id,
       'faa' AS category_id,
       la_name as local_authority_name,
       qdial as quick_dial_code,
       geom,
       ST_Centroid(geom) AS centroid,
       ST_Envelope(geom) AS bounding_box
FROM xws_area.faa;

-- Insert the fwa into the area table
INSERT INTO xws_area.area(code, ea_owner_id, ea_area_id, name, description, river_sea, type_id, category_id, parent_area_code, local_authority_name, quick_dial_code, geom, centroid, bounding_box)
SELECT fws_tacode AS code,
       SUBSTRING(fws_tacode, 1, 3) AS owner_id,
       (SELECT ea_area_id from xws_area.ea_owner where id = SUBSTRING(fws_tacode, 1, 3)) AS ea_area_id,
       ta_name AS name,
       descrip AS description,
       river_sea,
       LOWER(SUBSTRING(fws_tacode, 6, 1)) AS type_id,
       'fwa' AS category_id,
       (SELECT code FROM xws_area.area WHERE category_id = 'faa' AND xws_area.area.code = parent) AS parent_area_code,
       la_name as local_authority_name,
       qdial as quick_dial_code,
       geom,
       ST_Centroid(geom) AS centroid,
       ST_Envelope(geom) AS bounding_box
FROM xws_area.fwa;

-- Clean up the temporary "faa" and "fwa" tables
DROP TABLE xws_area.faa;
DROP TABLE xws_area.fwa;