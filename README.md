# React App Deploment to AWS S

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Deployment of a Single Page React Application to AWS S3 for hosting. S3 Resource was provisioned using AWS CloudFormation.

### Dependencies

##### 1. AWS Account

You would require to have an AWS account to be able to build cloud infrastructure.

##### 2. VS Code Editor

An editor would be helpful to visualize the image as well as code. Download the VS Code editor [here](https://code.visualstudio.com/download).

### Technology/Tools

#### 1. Jenkins

[React](https://reactjs.org/) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

#### 2. Jenkins

[Jenkins](https://www.jenkins.io/) is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.

#### 3. AWS CloudFormation

[AWS CloudFormation](https://aws.amazon.com/cloudformation/) provides a common language for you to model and provision AWS and third party application resources in your cloud environment. AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This gives you a single source of truth for your AWS and third party resources.

To create the AWS S3 Buckect, run

```bash
$ ./<create-aws-s3-script-file> <s3-bucket-name> <cloudformation-yaml-file> <json-params-file-for-cloudformation-yaml-file>
```

To delete the AWS S3 Buckect, run

```bash
$ ./<delete-aws-s3-script-file> <s3-bucket-name>
```

### License

[MIT](https://opensource.org/licenses/MIT)

### Author

[Russell Nyorere](https://neorusse.github.io/)
