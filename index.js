const getYtID = require("get-youtube-id");
const getYtTitle = require("get-youtube-title");
const fs = require("fs");
const readLine = require("readline");
require("dotenv").config();

// Youtube API Key. Check readme file
const key = process.env.YT_API_KEY;
const file_path = process.env.FILE_PATH;

// Creating a stream for readling links.txt
const file = readLine.createInterface({
  input: fs.createReadStream(file_path, process.env.ENCODING_FORMAT),
  output: process.stdout,
  terminal: false,
});

// Clearing the Output file
fs.writeFileSync(process.env.OUTPUT_FILE, "LINKS ARE BELOW \n\n");

// Reading the file line by line and outputting the links in output file
file.on("line", (link) => {
  const id = getYtID(link);
  getYtTitle(id, key, (err, title) => {
    if (err) throw err;
    const output_txt = `[${title}](${link})\n`;
    console.log(`Writing in the "${process.env.OUTPUT_FILE}" file...`);
    fs.appendFileSync(process.env.OUTPUT_FILE, output_txt);
  });
});
