# Ich habe noch nie…

<table><tr>
<td><img src="public/images/github-socialcard.png" alt="our logo" style="width:300px;"/></td>
<td style="vertical-align: top"><img src="https://img.shields.io/github/actions/workflow/status/se-ws22-ihnn/ihnn/docker-image.yml?branch=main&label=build" alt="build status"></td>
</tr></table>

Dieses Projekt ist ein Projekt im Rahmen der Veranstaltung Software Engineering an der HAW Hamburg.

Es basiert auf TypeScript und React, sowie node.js als Server. Da es nur ein Frontend ist, wird der fertige Build in einen Nginx Container übertragen, was das ganze viel schlanker macht.

```bash
docker run -p 3000:80 ghcr.io/se-ws22-ihnn/ihnn:latest
```

## Dev

1. Repository klonen
2. `npm install` ausführen
3. `npm start` ausführen
4. [http://localhost:3000](http://localhost:3000) im Browser öffnen

Fehler?

-   Prüfen, ob Node.js installiert ist. Falls nicht, installieren.
-   `node --version` sollte mindestens v16. ausgeben.
-   `npm --version` sollte mindestens 9. ausgeben.

# Build

## Node.js

```bash
npm run build                   # build the app
npm install -g serve            # install the server
serve -s build                  # start the server
```

## Docker

```bash
docker build -t ihnn .          # build the image
docker run -p 3000:80 ihnn    # run the image
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

# Dokumentation

Kommentare im Code sowie im seperaten Repo [ihnn-docs](https://github.com/se-ws22-ihnn/ihnn-docs).
