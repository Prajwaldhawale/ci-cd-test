pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Prajwaldhawale/ci-cd-test.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ci-cd-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 ci-cd-app'
            }
        }

    }
}