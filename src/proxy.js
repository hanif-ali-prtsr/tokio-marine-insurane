import httpProxy from "http-proxy";

let TARGET = process.env.API_HOST;

const proxy = httpProxy
  .createProxyServer({
    secure: false,
    followRedirects: true,
    autoRewrite: true,
    changeOrigin: true,
    target: TARGET,
  })
  .listen(10000);

proxy.on("proxyRes", function (proxyRes, req, res) {
  proxyRes.headers["Access-Control-Allow-Methods"] =
    "OPTIONS, GET, HEAD, POST, PATCH";
  proxyRes.headers["Access-Control-Allow-Origin"] = req.headers.origin;
  proxyRes.headers["Access-Control-Allow-Credentials"] = true;
  proxyRes.headers["Access-Control-Allow-Headers"] =
    "Content-Type, X-PRTSR-lang";
  delete proxyRes.headers["connection"];
});
