pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout(scm)
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("paulinemh/mastermind")
                }
            }
        }
        stage('Test') {
            steps {
                sh("docker run -e CI=true paulinemh/mastermind npm run test -- --coverage ")
            }
        }
        stage('Deploy') {
            input {
                message "Should we push image?"
                ok "Yes, of course."
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'd3bf96a7-fe80-4ab7-811a-cdd2d5288005') {
                       def image =  docker.build("paulinemh/mastermind:B${BUILD_NUMBER}", "-f ./Dockerfile .")
                       image.push("B${BUILD_NUMBER}")
                    }
                }
            }
        }
    }
}