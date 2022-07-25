### Note

You can include here your Js file with password Handler
ex. getPass, getUser, ecc....
Be careful and store only that kind of pass you can expose because are generated from
external service and do not give access directly to sensible data.
For example in case of EmailJs, password are used to send email so in the worst case scenario
you will be just victim of spam.
The best way is to use a middle-ware backend and send request to him without token from the front
end. The backend will resend requests safely to the front end accessing the API using tokens.

### Service used in the project

* [EmailJs](Shttps://www.emailjs.com): Contact Me
* [unogsNG](https://rapidapi.com/unogs/api/unogsng/): netflix
* [Streaming Availability](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/): prime and hbo
* [ipGeoLocation](https://ipgeolocation.io/timezone-api.html): time from ip (main page)