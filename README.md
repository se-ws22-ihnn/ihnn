# IHNN

Dieses Projekt ist ein Projekt im Rahmen der Veranstaltung Software Engineering an der HAW Hamburg. 

Es basiert auf TypeScript und React, sowie node.js als Server.

```bash
docker run -p 3000:3000 ghcr.io/se-ws22-ihnn/ihnn:latest
```

## Dev

1. Repository klonen
2. `npm install` ausführen
3. `npm start` ausführen
4. [http://localhost:3000](http://localhost:3000) im Browser öffnen

Fehler?

- Prüfen, ob Node.js installiert ist. Falls nicht, installieren. 
- `node --version` sollte mindestens v16. ausgeben.
- `npm --version` sollte mindestens 9. ausgeben.

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
docker run -p 3000:3000 ihnn    # run the image
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

# Dokumentation

Kommentare im Code sowie im seperaten Repo [ihnn-docs](https://github.com/se-ws22-ihnn/ihnn-docs).