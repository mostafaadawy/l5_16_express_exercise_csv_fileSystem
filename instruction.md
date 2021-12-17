Instructions

You will create an API that processes a CSV file (users.csv) and turns it into a JSON file upon visiting the endpoint /convert. Additionally, any phone number that is missing should be filled in with the string, "missing data".

Use the csvtojson [https://www.npmjs.com/package/csvtojson] node module as a library to do the conversion.

NOTE: a popup of "Renderer Failure: tsconfig.json" may open when starting this project. It is safe to ignore this error. Error is due to the comments in tsconfig.json not being considered valid JSON; however, it is generally considered safe to place comments in JSON config files.




npm i csvtojson
npm i --save-dev @types/csvtojson

To Complete This Exercise:

    Install the csvtojson module with npm i csvtojson.
    Install type definitions for csvtojson with npm i --save-dev @types/csvtojson.
    Import csvtojson into our index.ts for use.
    Create an endpoint for convert. View the documentation for csvtojson to see how to use it.
    Map the data from the csv input file to the json output file.
    Start up the project and visit the endpoint to see that the json file is created.


