# Image Retrieval API

This project is an Express.js application that provides an API to retrieve image URLs from an AWS S3 bucket and allows downloading of specific images.

## Features

- **List Images**: Retrieve a list of image URLs stored in an S3 bucket.
- **Get Image**: Download a specific image by its key from the S3 bucket.

## Prerequisites

- Node.js and npm installed.
- An AWS account with an S3 bucket.
- AWS IAM credentials with permissions to access the S3 bucket.

## Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root of the project with the following content:
   ```env
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   AWS_REGION=your_region
   S3_BUCKET_NAME=your_bucket_name
   PORT=7000  # Optional: set your preferred port
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Access the API**:
   - **List all images**:  
     GET `http://localhost:7000/images`
   - **Get a specific image**:  
     GET `http://localhost:7000/images/:key`  
     Replace `:key` with the actual key of the image.

## Error Handling

The application handles errors and returns a 500 status code with an appropriate message in case of any issues while retrieving images.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements. 

## Acknowledgments

- [AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-node-js/) - for interacting with AWS services.
- [Express.js](https://expressjs.com/) - for building the web server.

## Contact

For any questions, feel free to reach out at [your-email@example.com].
