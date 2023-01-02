**TABLE OF CONTENTS**

- [Use case](#use-case)
- [Output Format](#output-format)
- [env File Format](#env-file-format)
- [Usage](#usage)

# Use case

- I was creating markdown files for this github repo : [TIET_LESSONS](https://github.com/BeardedOwl1357/TIET_LESSONS)
- While inserting youtube videos, I realised that I need the title of videos and then associate them with link in the markdown format
- Thus, I created this utility program which will get the title of the video and create the markdown representation

# Output Format

`[Title of video](URL of video)`

# env File Format

```
YT_API_KEY=<get_your_own_key>
FILE_NAME_WITH_EXT="links.txt"
ENCODING_FORMAT="utf-8"
OUTPUT_FILE="output.txt"
```

- To get the Youtube API key, refer to this : https://developers.google.com/youtube/v3

# Usage

- Execute the command `npm install` to install the required packages
- Create and edit the `.env` file. [.env File Format](#env-file-format)
- Paste the links whose markdown representation is required in the default `links.txt` file
  - If you are changing the name of file, edit the environment variables
- Execute the prorgam using `npm start`
- The output will be available in the default `output.txt` file
