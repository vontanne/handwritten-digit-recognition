import http from "http";
import { readFile } from "fs/promises";
import { extname, resolve } from "path";
import mimeTypes from "./constants/mimeTypes.js";
import SERVER_CONFIG from "./constants/serverConfig.js";

const server = http.createServer(async (req, res) => {
  const publicDir = resolve("public");

  let filePath = req.url === "/" ? "index.html" : req.url.slice(1);
  filePath = resolve(publicDir, filePath);

  const ext = extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

  try {
    const content = await readFile(filePath, {
      encoding: contentType.startsWith("text/") ? "utf-8" : null,
    });
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        const errorPageContent = await readFile(
          resolve(publicDir, "404.html"),
          "utf-8"
        );
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(errorPageContent);
      } catch (error404) {
        res.writeHead(500);
        res.end(
          `Sorry, check with the site admin for error: ${error404.code} ..\n`
        );
      }
    } else {
      res.writeHead(500);
      res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
    }
  }
});

const { HOST, PORT } = SERVER_CONFIG;

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on http://${HOST}:${PORT}`);
});
