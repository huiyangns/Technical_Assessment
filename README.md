# Technical_Assessment

## Project structure
- .github (GitHub Actions workflow file)
- cypress
    - cucumberJsonFormatter (jar package to convert the format of report from json to html)
    - e2e
        - FeatureFiles (Cucumber feature files)
        - POM (Page Object model)
        - StepDefinitions (Cucumber step definitions)
- Dockerfile (Build Cypess docker image)
- Jenkinsfile (Clone repo, build docker image and conduct tests across chrome, firefox and edge)
- Makefile / node.sh (Install all dependencies)  
__Tips__: If we run tests in headless mode, a folder called cucumber-json will be created, which contains reports in json and html format.

## How to install dependencies
1. Open a terminal under project folder
2. Use `make` command to install all dependencies based on Node 18 via Docker
This will guarantee the consistency of environment for everyone  
__Tips__: If you see `make: execvp: ./node.sh: Permission denied` issue, please use `sudo chmod 777 node.sh` and try again

## CI
### GitHub Actions
Run Cypress tests with GitHub Actions as part of a CI/CD pipeline.  
This assessment uses the push event, so a workflow run is triggered every time someone pushes a change to the repository. Cypress tests will run on Chrome, FireFox and Edge.  
Please see __Actions__ tab of the GitHub repository
### Jenkins pipeline
1. Open Jenkins and click "New Item" on the dashboard
2. Enter an item name, choose "Pipeline" and click "OK" button
3. Check "This project is parameterized" and add a string parameter with Name: BRANCH_NAME and Default Value: master
3. Choose "Pipeline script from SCM" for Pipeline Definition
4. "SCM" -> Git, "Repository URL" -> https://github.com/huiyangns/Technical_Assessment.git, "Branches to build" -> ${BRANCH_NAME}
5. Disable "Lightweight checkout" below "Branches to build" section
6. Click "Build with Parameters" and click "Build"
7. After tests finish, Build Artifacts contain reports for chrome, firefox and edge individually.

## Run locally
As TC2 requires Run tests 5 times to ensure 100% pass rate, we can use the following command to run tests 5 times on chrome continuously  
`npm run e2e:local:repeat:chrome`