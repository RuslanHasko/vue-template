# Boilerplate for Vue.js
===================

> Includes
- Vue
- Vuex
- Vue Router
- Vuex Router Sync
- Sass support (with global variables/mixins etc.)
- Axios
- Nightwatch (with ChromeDriver)


To use e2e tests you need to run following command in terminal
```sudo apt-get install chromium-browser```

## Nightwatch Config

```{
     "src_folders": ["test/e2e/specs"],
     "output_folder": ["test/e2e/reports/"],
     "custom_commands_path": "",
     "custom_assertions_path": "",
     "page_objects_path": "",
     "globals_path": "test/e2e/globals.js",

     "selenium": {
       "start_process": false
     },

     "test_settings": {
       "default": {
         "selenium_port": 9515,
         "selenium_host": "localhost",
         "default_path_prefix" : "",

         "desiredCapabilities": {
           "browserName": "chrome",
           "chromeOptions" : {
             "args" : ["--no-sandbox", "--headless", "--disable-gpu"],
             "binary" : "/usr/bin/chromium-browser"
           },
           "acceptSslCerts": true
         }
       }
     }
   }
```

Parameters:

Name | description
---- | -------------
chromeOptions | special flags for Chrome's work in headless mode
