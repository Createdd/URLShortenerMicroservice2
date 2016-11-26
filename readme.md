# Author
![@DDCreationStudios](https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcwAAAAJDg1MDE4YWFjLTIwN2EtNDJhZC1hNGE2LTY4NjRmZGM2ZmQ2ZA.jpg)

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
