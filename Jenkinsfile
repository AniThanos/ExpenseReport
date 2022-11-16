pipeline{
    agent any
    tools {
        nodejs '16.0.0' 
    }
    stages{
        stage('build'){
            steps {
                sh 'npm install'
            }
        }
    }
}