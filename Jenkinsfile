pipeline{
    agent any
    tools {
        nodejs '16.0.0' 
    }
    stages{
        stage ('Node Version'){
            steps {
                sh 'node --version'
            }
        }
        stage('build'){
            steps {
                sh 'npm install'
            }
        }
        
    }
}
