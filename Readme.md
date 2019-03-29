# GOAL

Goal of this project is to do end-to-end testing on the PSL product. We are simulating browser behaviour to create our metrics. Our Cypress scripts are in the integration folder.

## Cypress Test

### How to install node_moules via npm

Go to ui folder

``` npm install ```

### How to run Cypress in headless mode

``` npm run cy-run ```

After running this command, Cypress will run in headless mode meaning inside the terminal.  
At the end of all the tests, ``` mochawesome.json ``` file will be generated inside results folder. This file contains the complete report about all the tests.


### How to run Cypress in browser mode

``` npm start ```

After running Cypress, Cypress runner window opens.  
Click on "Run all specs" to run all the tests.

![cypress_runner](https://github.com/LexisNexis/search-pss-metrics/blob/master/images/cypress_runner.PNG)

After that you can see which tests passed or failed.

![cypress_running](https://github.com/LexisNexis/search-pss-metrics/blob/master/images/cypress_running.PNG)


### tests and usernames 

The usernames used in the test need to match up as described in [db/static/user_journeys.json](https://github.com/LexisNexis/search-pss-metrics/blob/master/Projects/user-journeys-tests/db/static/user_journeys.json)

This is the reason why username4 is missing as print test has been removed and username4 is linked to print test. 

