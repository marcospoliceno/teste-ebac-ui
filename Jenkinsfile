pipeline{
    agent "any"

    stages{
        stage("Clonar repositório"){
            steps{
                git branch: 'main', url: 'https://github.com/marcospoliceno/teste-ebac-ui.git'
            }
        }
        stage("Instalar dependencias"){
            steps{
                sh 'npm install'
            }
        }
        stage("Executar os testes"){
            steps{
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}