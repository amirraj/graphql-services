const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000',
    // token : "019d1e2e04eefdcd0caee1468f39a45e69d33d3f",
    options: {
      'sonar.projectName': 'gds-service',
      'sonar.projectDescription': '',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.login':'admin', 
      'sonar.password':'admin123'
    }
  },
  () => process.exit()
)