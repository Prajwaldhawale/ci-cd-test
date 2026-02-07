pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ci-cd-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f ci-cd-container || true'
                sh 'docker run -d -p 3000:3000 --name ci-cd-container ci-cd-app'
            }
        }

    }
}