pipeline {
    agent any  // Run on any available Jenkins agent

    tools {
        nodejs 'node22'
    }

    stages {
        stage('Checkout') {
            steps {
                git(
                    url: 'https://github.com/mfitrahrmd/counter.git',
                    branch: 'master',
                    credentialsId: '1dac44bc-fdab-4ea6-b25a-09580e8001cd'
                )
            }
        }
        stage('Test') {
            steps {
                sh 'npm i'
                sh 'npm t'    // Replace with your test command
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building project..."'
                sh 'npm run build'   // Or npm run build, go build, etc.
            }
        }
        
        // stage('Deploy') {
        //     steps {
        //         sh 'echo "Deploying to server..."'
        //         // Example: SSH to server and deploy
        //         sh 'ssh user@server "cd /var/www/myapp && git pull && pm2 restart app"'
        //     }
        // }
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
