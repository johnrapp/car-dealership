# Sofias bilhandel
## Krav
För att köra programmet krävs senaste versionen av Node och npm samt att en PostgresSQL-databas körs på standardporten 5432.
## Köra programmet
För att köra en kallstart, dvs då inget annat är initialiseras, kör kommandot
```sh
$ npm run deploy
```

Detta kommando kommer i sin tur att köra
```sh
$ npm install
```
vilket installerar alla dependencies, och sedan
```sh
$ npm run init-db
```
vilket först ber användaren om databasnamn och annan konfiguration till PostgresSQL, och sedan skapar alla tabeller och sätter in initialdata från `data.json` i dem. Till sist körs
```sh
$ npm start
```
vilket startar upp servern. Det är detta kommando som körs sedan för att starta om servern.

Nu borde allt vara klart och applikationen nås på [http://localhost/](http://localhost/).