sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
active server
browser->>server: json new_note_spa content:"hola" date:"2025-07-01T22:59:24.922Z"
server->>browser: json {"message":"note created"}
deactivate server