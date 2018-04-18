# Overview

# Setup local dev env

```
$ npm install -g @google-cloud/functions-emulator
$ functions config set tail true
$ functions start
```

# Deploy locally
```
functions deploy localTest --trigger-http --entry-point indexGET
```

# Test
```
functions call indexGET
```

# Debug
```
functions inspect indexGET
```

# Deploy

```
$ gcloud functions deploy httpTest --trigger-http --entry-point indexGET
```
