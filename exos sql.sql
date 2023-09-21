
SELECT ville_nom, departement_nom 
FROM villes_france_free
INNER JOIN departement ON departement_code = ville_departement
ORDER BY ville_population_2012 DESC
LIMIT 10;


SELECT ville_nom, departement_nom 
FROM villes_france_free
INNER JOIN departement ON departement_code = ville_departement
ORDER BY ville_population_2012 DESC
LIMIT 10;