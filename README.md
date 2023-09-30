# API.imjustgood.com

This Node.js library provides easy access to the API.imjustgood.com API, allowing you to interact with various features and functionalities offered by the service.

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
### Tiktok
For TikTok content, use the tiktok method. Pass the TikTok username as the parameter.

   ```javascript
   // Example: Get TikTok content
   const username = 'tiktok-username';
   const result = imjustgood.tiktok(username);
   console.log(result);
```

### Instagram
To fetch content from Instagram, use the instagram method with the Instagram username.

   ```javascript
   // Example: Get Instagram content
   const username = 'instagram-username';
   const result = imjustgood.instagram(username);
   console.log(result);
   ```

### Twitter
For Twitter content, use the twitter method with the Twitter username

   ```javascript
   // Example: Get Twitter content
   const username = 'twitter-username';
   const result = imjustgood.twitter(username);
   console.log(result);
   ```
