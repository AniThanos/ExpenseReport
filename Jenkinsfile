pipeline{
    agent any
    tools {
        nodejs '19.1.0' 
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
        stage('install-react-package'){
            steps {
                dir("client"){
                   sh 'npm install' 
                }
            }
        }
    }
}
