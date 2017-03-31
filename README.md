## 🐝 [Serverless.buzz](https://serverless.buzz) Chat Example

This is an example of creating a serverless chatroom by using:
 * [React.js](https://github.com/facebookincubator/create-react-app)
 * [The Serverless Framework](https://serverless.com)
 * Amazon Web Services ([AWS S3](https://aws.amazon.com/s3/) and [AWS IoT](https://aws.amazon.com/iot/))

This chat application can be a starting point to understand how React, the Serverless Framework, and AWS can work together to create a meaningful application without managing servers.

To learn more about the state of the serverless world, check out [Serverless.buzz](https://serverless.buzz) 🐝

### Development
To run this project locally:

1. Clone the project: `git clone https://github.com/conroywhitney/serverless-buzz-chat-example.git
`
2. Install dependencies: `yarn`
3. Add your AWS IoT credentials to a `.env` file:
```
  REACT_APP_AWS_IOT_ENDPOINT=
  REACT_APP_AWS_IOT_REGION=
  REACT_APP_AWS_IOT_ACCESS_KEY=
  REACT_APP_AWS_IOT_SECRET_ACCESS_KEY=
  REACT_APP_AWS_IOT_SESSION_TOKEN=
```
(Optionally, you can implement an endpoint like described in the tutorial [How To Build A Serverless Notification System on AWS](https://serverless.com/blog/serverless-notifications-on-aws/))

4. Start the local dev server `yarn start`
5. Navigate to `localhost:3000`

### Credits

This project builds upon the ideas introduced in [How To Build A Serverless Notification System on AWS](https://serverless.com/blog/serverless-notifications-on-aws/) from the [Serverless Blog](https://serverless.com/blog/). Many thanks to the teams at [Amazon Web Services](https://github.com/aws), [Serverless](https://github.com/serverless), and [Facebook](https://github.com/facebook) for making the technologies that make this type of application possible.

### License

Authored by Conroy Whitney of [Serverless.buzz](https://serverless.buzz) 🐝

Copyright (c) 2017 Conroy Whitney. Licensed under the MIT license.

Bee icon provided free by [EmojiOne](http://emojione.com/) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
