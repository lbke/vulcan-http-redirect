Package.describe({
  name: "vulcan:http-redirect"
});

Package.onUse(api => {
  api.use(["vulcan:core", "webapp"]);

  api.mainModule("lib/server/main.js", "server");
});
