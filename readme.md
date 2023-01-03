**TABLE OF CONTENTS**

- [Use case](#use-case)
- [Intended Features](#intended-features)
- [Output Format](#output-format)
- [env File Format](#env-file-format)
- [Usage](#usage)

# Use case

- I was creating markdown files for this github repo : [TIET_LESSONS](https://github.com/BeardedOwl1357/TIET_LESSONS)
- While inserting youtube videos, github links and other information, I realised that this task can be automated with a combination of regular expressions, string operations and required API's
- Thus, I created this utility program which will allow me to insert markdown links in an effective manner

# Intended Features

- The intended output format is : [intended output format](#output-format)

- [x] Generate markdown text for adding a Youtube Video
- [ ] Generate markdown text for adding a Youtube Playlist
- [ ] Generate markdown text for adding a Youtube Channel
- [ ] Generate markdown text for adding a Github Repo

# Output Format

- Video : `[${Title of video}](${URL of video})`
- Playlist : `[${Playlist Name}](${Playlist Link})`
- Channel : `[${ChannelHandle}](${Channel_Link})`
- Github Repo : `[${RepoName} by ${Author}](${Repo_Link})`

# env File Format

```
YT_API_KEY=<get_your_own_key>
FILE_PATH="./links.txt"
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
