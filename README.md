# Vulcan Http Redirect

## http://www -> http:// and vice-versa

This package helps setting redirection with [Vulcan.js](http://vulcanjs.org/).

See [Awesome Vulcan](https://www.awesome-vulcan.com) for usage examples.

NOTE: the redirection is based on an Express middleware. A more efficient pattern would be to setup an nginx server with Meteor Up.
It is a real redirection, an not a DNS CNAME or ALIAS. This is necessary to keep queries consistent with the `ROOT_URL` without using CORS.

**/!\ This is an experimental package, API will certainly evolve in the months to come**.

## Installation

Clone this repo:

```sh
git clone https://github.com/lbke/vulcan-http-redirect
```

You can clone it directly in your app `packages` folder. You can also clone it in an isolated `vulcan-packages` folder outside of your app, and then set the `METEOR_PACKAGE_DIRS` environment variable to `"/some-dir/vulcan-packages"`. This way, you can put all your reusable package in this `vulcan-packages` folder without polluting your own app.

This package won't be published on Atmosphere or npm until it is a bit more mature.

## Contributing

This package will evolve and improve depending on the use cases we encounter. Best way to contribute is to use it in your own app, and propose ideas, suggestions and PR based on your experience.

We seek for maximum reusability, so each method should be as configurable as possible, and split into independant functions whenever possible.

_[Built with love by LBKE](https://github.com/lbke)_
