pipeline {
    agent any
    options { ansiColor('xterm') }
    parameters {
      string(description: 'Branch to get code from.', name: 'BRANCH_NAME', defaultValue: 'master')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: BRANCH_NAME]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/huiyangns/Technical_Assessment.git']]])
            }
        }
        stage('Build Cypress docker image') {
            steps {
                script {
                    sh "docker build -t cypress:v12 ."
                }
            }
            
        }

        stage('Run Cypress tests on chrome') {
            steps {
                script {
                    ARTEFACT_DIR="${env.WORKSPACE}/artefacts/${BUILD_NUMBER}/chrome"
                    sh "mkdir -p \"${ARTEFACT_DIR}/screenshots\""
                    sh """
                    docker run --rm --ipc=host \
                    -v \"${ARTEFACT_DIR}:/artefacts\" \
                    -v \"${env.WORKSPACE}:/app\" \
                    -v \"/app/node_modules\" \
                    cypress:v12 \
                        npx cypress run --env TAGS='@regression' --headless --browser chrome --e2e
                    """
                    sh "cp ${env.WORKSPACE}/cypress/cucumber-json/*.* ${ARTEFACT_DIR}"
                }
            }
        }

        stage('Run Cypress tests on firefox') {
            steps {
                script {
                    ARTEFACT_DIR="${env.WORKSPACE}/artefacts/${BUILD_NUMBER}/firefox"
                    sh "mkdir -p \"${ARTEFACT_DIR}/screenshots\""
                    sh """
                    docker run --rm --ipc=host \
                    -v \"${ARTEFACT_DIR}:/artefacts\" \
                    -v \"${env.WORKSPACE}:/app\" \
                    -v \"/app/node_modules\" \
                    cypress:v12 \
                        npx cypress run --env TAGS='@regression' --headless --browser firefox --e2e
                    """
                    sh "cp ${env.WORKSPACE}/cypress/cucumber-json/*.* ${ARTEFACT_DIR}"
                }
            }
        }

        stage('Run Cypress tests on edge') {
            steps {
                script {
                    ARTEFACT_DIR="${env.WORKSPACE}/artefacts/${BUILD_NUMBER}/edge"
                    sh "mkdir -p \"${ARTEFACT_DIR}/screenshots\""
                    sh """
                    docker run --rm --ipc=host \
                    -v \"${ARTEFACT_DIR}:/artefacts\" \
                    -v \"${env.WORKSPACE}:/app\" \
                    -v \"/app/node_modules\" \
                    cypress:v12 \
                        npx cypress run --env TAGS='@regression' --headless --browser edge --e2e
                    """
                    sh "cp ${env.WORKSPACE}/cypress/cucumber-json/*.* ${ARTEFACT_DIR}"
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: "artefacts/${BUILD_NUMBER}/**/*", fingerprint: true
        } 
    }
    
}