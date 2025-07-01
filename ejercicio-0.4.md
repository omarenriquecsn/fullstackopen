sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
active server
browser->>server: HTML document note:"hola"
server->>browser: HTML document new_note
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server-->>browser: HTML document notes

deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: the css file main.css
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: the JavaScript file main.js

deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: data.json
    response:
    [{"content":"New spa note","date":"2025-07-01T15:47:45.247Z"},{"content":"Another new spa note","date":"2025-07-01T15:47:54.222Z"},{"content":"Test","date":"2025-07-01T15:51:24.383Z"},{"content":"amazeballs","date":"2025-07-01T15:52:25.973Z"},{"content":"New Note","date":"2025-07-01T15:55:08.448Z"},{"content":"","date":"2025-07-01T16:00:31.788Z"},{"content":"000","date":"2025-07-01T16:05:40.522Z"},{"content":"","date":"2025-07-01T16:05:42.868Z"},{"content":"newnote","date":"2025-07-01T16:05:59.299Z"},{"content":"123","date":"2025-07-01T16:11:31.856Z"},{"content":"","date":"2025-07-01T16:12:44.601Z"},{"content":"HELLO","date":"2025-07-01T16:12:57.494Z"},{"content":"123","date":"2025-07-01T16:13:16.793Z"},{"content":"prueba","date":"2025-07-01T16:15:37.713Z"},{"content":"New note","date":"2025-07-01T16:22:24.684Z"},{"content":"hello world","date":"2025-07-01T16:23:33.335Z"},{"content":"spa","date":"2025-07-01T16:34:10.731Z"},{"content":"hello","date":"2025-07-01T16:39:48.889Z"},{"content":"Another note goes here.","date":"2025-07-01T16:44:55.093Z"},{"content":"How are we writing to data.json","date":"2025-07-01T16:49:17.163Z"},{"content":"New note","date":"2025-07-01T16:56:14.636Z"},{"content":"teste","date":"2025-07-01T16:58:45.330Z"},{"content":"jffff","date":"2025-07-01T17:13:06.872Z"},{"content":"fffff","date":"2025-07-01T17:13:20.168Z"},{"content":"","date":"2025-07-01T17:13:21.149Z"},{"content":"nmota","date":"2025-07-01T17:15:23.856Z"},{"content":"prueba","date":"2025-07-01T17:40:56.129Z"},{"content":"prueba2","date":"2025-07-01T17:44:49.049Z"},{"content":"qwerty","date":"2025-07-01T17:55:08.916Z"},{"content":"yur","date":"2025-07-01T18:11:05.809Z"},{"content":"teste2","date":"2025-07-01T18:27:02.977Z"},{"content":"cofee","date":"2025-07-01T18:28:54.543Z"},{"content":"submittext","date":"2025-07-01T18:29:31.477Z"},{"content":"batman","date":"2025-07-01T18:31:54.406Z"},{"content":"","date":"2025-07-01T18:32:19.195Z"},{"content":"nmota","date":"2025-07-01T18:40:21.536Z"},{"content":"hola","date":"2025-07-01T18:58:01.561Z"},{"content":"hola","date":"2025-07-01T18:58:10.548Z"},{"content":"hola","date":"2025-07-01T18:59:51.611Z"},{"content":"hola","date":"2025-07-01T19:01:23.510Z"},{"content":"testando","date":"2025-07-01T19:02:08.134Z"},{"content":"test","date":"2025-07-01T19:06:52.127Z"},{"content":"test","date":"2025-07-01T19:07:20.108Z"},{"content":"hola","date":"2025-07-01T19:17:29.822Z"},{"content":"hello","date":"2025-07-01T19:24:25.495Z"},{"content":"are these random text, or are these people submitting these","date":"2025-07-01T19:25:06.616Z"},{"content":"","date":"2025-07-01T19:30:40.519Z"},{"content":"hey fuckers","date":"2025-07-01T19:30:54.355Z"},{"content":"sorry for that, much love guys","date":"2025-07-01T19:31:21.857Z"},{"content":"i thought it was gonna be censored, nvm, i am an indian so this kinda behviour is normal here hehe","date":"2025-07-01T19:32:11.042Z"},{"content":"interesting, so it is a public text log that I assume will reset every day or something","date":"2025-07-01T19:35:08.940Z"},{"content":"I am sending this on the reload version to see if the spa version automatically updates","date":"2025-07-01T19:36:15.134Z"},{"content":"and response on spa","date":"2025-07-01T19:36:26.222Z"},{"content":"","date":"2025-07-01T19:36:47.991Z"},{"content":"","date":"2025-07-01T19:36:48.705Z"},{"content":"","date":"2025-07-01T19:36:49.454Z"},{"content":"still need to manually reload to see updates on SPA. You can keep submitting and see your notes get added live on SPA, but need to refresh to see new notes from others (i.e. fetch from server again). ","date":"2025-07-01T19:41:01.608Z"},{"content":"d","date":"2025-07-01T19:42:17.226Z"},{"content":"good night from greece","date":"2025-07-01T19:47:15.487Z"},{"content":"äskde","date":"2025-07-01T19:51:20.947Z"},{"content":"äksdeedee","date":"2025-07-01T19:51:43.210Z"},{"content":"buy bitcoin","date":"2025-07-01T19:54:02.694Z"},{"content":"wizards are getting me!","date":"2025-07-01T19:56:21.251Z"},{"content":"fullstackopen appears to be quite advanced. A beginner would definitely need to do The Odin Project first to really understand this.","date":"2025-07-01T20:03:32.654Z"},{"content":"xxx","date":"2025-07-01T20:06:06.507Z"},{"content":"lol","date":"2025-07-01T20:31:03.312Z"},{"content":"My name is Reury and i am going testing a send new note","date":"2025-07-01T20:36:37.719Z"},{"content":"test","date":"2025-07-01T20:38:33.039Z"},{"content":"ijojio","date":"2025-07-01T20:39:29.994Z"},{"content":"dwad","date":"2025-07-01T20:39:45.440Z"},{"content":"k","date":"2025-07-01T20:40:49.299Z"},{"content":"Testing again","date":"2025-07-01T20:44:28.617Z"},{"content":"abdou was here","date":"2025-07-01T20:49:41.042Z"},{"content":"olololo","date":"2025-07-01T20:55:56.347Z"},{"content":"Registro Fotográfico ","date":"2025-07-01T22:17:02.874Z"},{"content":"K and L","date":"2025-07-01T22:17:35.136Z"},{"content":"hola","date":"2025-07-01T22:28:45.535Z"}]
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico

    active server
    server->>browser: Favicon.ico BadRequest 404 Not Found
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
