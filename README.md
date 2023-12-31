# API.imjustgood.com
This Node.js library provides easy access to the API.imjustgood.com API, allowing you to interact with various features and functionalities offered by the service.

```
█ █▀▄▀█   █ █ █ █▀ ▀█▀ █▀▀ █▀█ █▀█ █▀▄
█ █ ▀ █ █▄█ █▄█ ▄█  █  █▄█ █▄█ █▄█ █▄▀
api media service bridge for your code.
```
<p>
    <a href="http://pypi.org/project/justgood" rel="nofollow">
        <img alt="PyPI" src="https://img.shields.io/pypi/v/justgood?label=PyPI" style="max-width:100%;">
    </a>
    <a href="http://pypi.org/project/justgood" rel="nofollow">
        <img alt="Python" src="https://img.shields.io/pypi/pyversions/justgood?color=red&label=Python" style="max-width:100%;">
    </a>
    <a href="https://github.com/goodop/api.imjustgood.com" rel="nofollow">
        <img alt="Update" src="https://img.shields.io/github/last-commit/goodop/api.imjustgood.com?color=green&label=Update" height="20" style="max-width:100%;">
    </a>
    <a href="https://github.com/goodop/api.imjustgood.com/blob/main/LICENSE" rel="nofollow">
        <img alt="License" src="https://img.shields.io/github/license/goodop/api.imjustgood.com?color=green&label=Lincense" height="20" style="max-width:100%;">
    </a>
    <a href="https://www.npmjs.com/package/justgood" rel="nofollow">
        <img alt="npm" src="https://img.shields.io/npm/v/justgood?label=npm">
    </a>
</p>

## Installation

You can install this library via npm or by cloning the GitHub repository.

### Using npm

1. Install the library in your Node.js project using npm:

   ```bash
   npm install justgood
   ```
2. In your project, require the library and create an instance of Imjustgood by providing your API key:

   ```javascript
    const Imjustgood = require('justgood');
    const apiKey = 'your-api-key';
    const imjustgood = new Imjustgood(apiKey);
   ```

### Using git clone

1. You can clone the repository from GitHub using the following command:

   ```bash
   git clone https://github.com/goodop/api.imjustgood.com
   ```

2. Install the library's dependencies:

   ```bash
   cd api.imjustgood.com
   npm install
   ```
3. In your project, require the library and create an instance of Imjustgood by providing your API key:

   ```javascript
   const Imjustgood = require('justgood');
   
   const apiKey = 'your-api-key';
   const imjustgood = new Imjustgood(apiKey);
   ```

## API Key Requirement

To use this library, you'll need an API key, which serves as a private key and can be obtained by contacting our [team](https://imjustgood.com/team). The API key is necessary to improve server security and maintenance.

## Example Usage
Here's an example of how to use this library to call the status method and get the server status:

   ```javascript
   const Imjustgood = require('justgood');
   
   const apiKey = 'your-api-key';
   const imjustgood = new Imjustgood(apiKey);
   
   // Example: Call the status method
   imjustgood.status()
     .then(response => {
       console.log(response);
     })
     .catch(error => {
       console.error(error);
     });
   ```
## License

This project is licensed under the BSD 3-Clause License. See the [LICENSE](https://github.com/goodop/api.imjustgood.com/blob/main/LICENSE) file for details.

## Documentation

This library provides methods to scrape content from various social media platforms.

### YouTube

To retrieve YouTube content, use the `youtube` method. Provide the query as the parameter.

   ```javascript
   // Example: Get YouTube content
   const query = 'your-query';
   const result = imjustgood.youtube(query);
   console.log(result);
   ```
### Tiktok Profile
For TikTok content, use the `tiktok` method. Pass the TikTok username as the parameter.

   ```javascript
   // Example: Get TikTok content
   const username = 'tiktok-username';
   const result = imjustgood.tiktok(username);
   console.log(result);
```

### Instagram Profile
To fetch content from Instagram, use the `instagram` method with the Instagram username.

   ```javascript
   // Example: Get Instagram content
   const username = 'instagram-username';
   const result = imjustgood.instagram(username);
   console.log(result);
   ```

### Twitter Profile
For Twitter content, use the `twitter` method with the Twitter username

   ```javascript
   // Example: Get Twitter content
   const username = 'twitter-username';
   const result = imjustgood.twitter(username);
   console.log(result);
   ```
### Smule Profile
For Smule content, use the `smule` method with the Twitter username

   ```javascript
   // Example: Get Smule content
   const username = 'smule-username';
   const result = imjustgood.smule(username);
   console.log(result);
   ```

### Youtube Downloader
To download content from YouTube, use the `youtubedl` method. Provide the YouTube video URL as the parameter.
   ```javascript
    // Example: Download a YouTube video
    const videoUrl = 'https://www.youtube.com/watch?v=your-video-id';
    const result = imjustgood.youtubedl(videoUrl);
    console.log(result);
   ```

### Instagram Post Downloader
To download Instagram posts, use the `instapost` method with the Instagram post URL.

   ```javascript
    // Example: Download an Instagram post
    const postUrl = 'https://www.instagram.com/p/your-post-id/';
    const result = imjustgood.instapost(postUrl);
    console.log(result);
   ```

### Twitter Downloader
For downloading Twitter videos or Photos, use the `twitterdl` method with the Twitter video URL.

   ```javascript
    // Example: Download a Twitter video or Photos
    const Url = 'https://twitter.com/username/status/url';
    const result = imjustgood.twitterdl(Url);
    console.log(result);

   ```
### TikTok Downloader
For TikTok video downloads, use the `tiktokdl` method. Pass the TikTok video URL as the parameter.

   ```javascript
    // Example: Download a TikTok video
    const videoUrl = 'https://www.tiktok.com/@username/video/video-url';
    const result = imjustgood.tiktokdl(videoUrl);
    console.log(result);

   ```

### Smule Downloader
For Smule video or Audio downloads, use the `smuledl` method. Pass the Smule Post URL as the parameter.

   ```javascript
    // Example: Download a Smule video or Audio
    const videoUrl = 'https://www.smule.com/@username/url';
    const result = imjustgood.smuledl(videoUrl);
    console.log(result);

   ```
