pipeline {
    agent any  // Run on any available Jenkins agent

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mfitrahrmd/jenkins.git'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building project..."'
                sh 'npm run build'   // Or npm run build, go build, etc.
            }
        }
        stage('Test') {
            steps {
                sh 'npm t'    // Replace with your test command
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying to server..."'
                // Example: SSH to server and deploy
                sh 'ssh user@server "cd /var/www/myapp && git pull && pm2 restart app"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Build failed, check logs.'
        }
    }
}
