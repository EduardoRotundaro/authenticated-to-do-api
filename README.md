# Rest API w/ Express JS, Mongo DB and JWT authentication (DEVELOPING)

A backend application using Node JS with the Express framework, that implements a to-do list on the MongoDB for authenticated users.

### After clone

```sh
$ cd authenticated-to-do-api
$ npm install
```

### Starting the application

```sh
$ npm start
```

### Routes

* Create account
```sh
method: "POST"
url: "/server/user"
body: {
}
```

* Login
```sh
method: "POST"
url: "/server/login"
body: {
}
```

* New To-Do Item
```sh
method: "POST"
url: "/server/protected/to-do"
headers: "Authentication: <TOKEN>"
body: {
}
```

* Get To-Do Item
```sh
method: "GET"
url: "/server/protected/to-do/:id"
headers: "Authentication: <TOKEN>"
body: {
}
```

* Update To-Do Item
```sh
method: "PUT"
url: "/server/protected/to-do/:id"
headers: "Authentication: <TOKEN>"
body: {
}
```

* Remove To-Do Item
```sh
method: "DELETE"
url: "/server/protected/to-do/:id"
headers: "Authentication: <TOKEN>"
body: {
}
```

* Validate Token
```sh
method: "GET"
url: "/server/validate-token"
headers: "Authentication: <TOKEN>"
body: {
}
```

* Update User Account
```sh
method: "PUT"
url: "/server/protected/user/:id"
headers: "Authentication: <TOKEN>"
body: {
}
```