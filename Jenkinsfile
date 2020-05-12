pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 20001-20100:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }
    stage('Deployment') {
      parallel {
        stage('Staging') {
          when {
            branch 'staging'
          }
          steps {
            withAWS(region:'us-east-2',credentials:'ecod-aws') {
              s3Delete(bucket: 'ecod-s3-stage', path:'**/*')
              s3Upload(bucket: 'ecod-s3-stage', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
        stage('Production') {
          when {
            branch 'master'
          }
          steps {
            withAWS(region:'us-east-2',credentials:'ecod-aws') {
              s3Delete(bucket: 'ecod-s3-prod', path:'**/*')
              s3Upload(bucket: 'ecod-s3-prod', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
      }
    }
  }
}
