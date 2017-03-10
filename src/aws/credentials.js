// these variables live in the `.env` file
export default {
  iotEndpoint: process.env.REACT_APP_AWS_IOT_ENDPOINT,
  region: process.env.REACT_APP_AWS_IOT_REGION,
  awsAccessKey: process.env.REACT_APP_AWS_IOT_ACCESS_KEY,
  awsSecretAccessKey: process.env.REACT_APP_AWS_IOT_SECRET_ACCESS_KEY,
  sessionToken: process.env.REACT_APP_AWS_IOT_SESSION_TOKEN
}
