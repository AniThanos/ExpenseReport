pipeline{
    agent any
    tools {
        nodejs '19.1.0' 
    }
    stages{
        stage('build'){
            steps {
                sh 'npm install'
            }
        }
    }
}