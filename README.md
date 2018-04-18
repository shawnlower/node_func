# Overview

## References
- (github:helloword)[https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/functions/helloworld]
- (GCP:Emulator_Docs)[https://cloud.google.com/functions/docs/emulator]
- (GCP_Console:Functions)[https://console.cloud.google.com/functions]
- (GCP_Functions_Quickstart)[https://cloud.google.com/functions/docs/quickstart]

# Setup local dev env

```
$ npm install --no-save @google-cloud/functions-emulator
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

Chrome: ctrl-shift-i, click the node icon, detach debugger, call (per above), add breakpoints, etc

# Deploy

```
$ gcloud functions deploy httpTest --trigger-http --entry-point indexGET
```

```
$ gcloud functions deploy gcsTest --trigger-bucket --entry-point helloGCS
```

==
GCS Test

[https://cloud.google.com/functions/docs/calling/storage](GCS Storage Triggers)


Setup bucket
```
gsutil mb gcs_test1
```

Deploy function to trigger on bucket
```
$ gcloud functions deploy gcsTest
    --trigger-event google.storage.object.finalize
    --trigger-resource gs://gcs_test1
    --entry-point helloGCS
```


[shawn@nine10 node]$ gcloud functions list
NAME        STATUS  TRIGGER        REGION
function-1  ACTIVE  HTTP Trigger   us-central1
gcsTest     ACTIVE  Event Trigger  us-central1
httpTest    ACTIVE  HTTP Trigger   us-central1


[shawn@nine10 node]$ gsutil cp ~/Pictures/giphy.gif
CommandException: Wrong number of arguments for "cp" command.


[shawn@nine10 node]$ gsutil cp ~/Pictures/giphy.gif  gs://gcs_test1
Copying file:///home/shawn/Pictures/giphy.gif [Content-Type=image/gif]...
- [1 files][  2.0 MiB/  2.0 MiB]
Operation completed over 1 objects/2.0 MiB.


[shawn@nine10 node]$ gcloud functions logs read gcsTest
LEVEL  NAME     EXECUTION_ID    TIME_UTC                 LOG
D      gcsTest                  2018-04-18 04:22:06.774  Node.js module defined by file index.js is expected to export function named helloGCS
D      gcsTest                  2018-04-18 04:23:02.378  Node.js module defined by file index.js is expected to export function named helloGCS
D      gcsTest  75397569573997  2018-04-18 04:26:59.793  Function execution started
I      gcsTest  75397569573997  2018-04-18 04:26:59.975  File giphy.gif uploaded.
D      gcsTest  75397569573997  2018-04-18 04:27:00.065  Function execution took 273 ms, finished with status: 'ok'


