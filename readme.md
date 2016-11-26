# Author
![@DDCreationStudios](https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p320x320/10606478_766569733391212_3806866194883238537_n.jpg?oh=d406800e2d0fe66b7711ae4f8797a913&oe=58CDB60C)

Created by Daniel Detusch

[Github](https://github.com/DDCreationStudios) | [FreeCodeCamp](https://www.freecodecamp.com/ddcreationstudios) | [CodePen](http://codepen.io/ddcreationstudios/) | [LinkedIn](https://www.linkedin.com/in/daniel-deutsch-b95611127) | [Site](http://ddcreationstudios.at//) | [E-Mail](mailto:office@ddcreationstudios.at)

# FreeCodeCamp API Projects: URL Shortener Microservice
## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

```js
https://little-url.herokuapp.com/new/https://www.google.com
https://little-url.herokuapp.com/new/http://foo.com:80
```

## Example creation output:

```js
{"original_url":"http://example.com:80","short_url":"https://short-url.herokuapp.com/8170"}
```

## Usage:

```
https://short-url.herokuapp.com/2871
```

### Will redirect to:

```
https://www.google.com/
```
