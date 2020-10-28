const parser = require("./app");
const assert = require("assert").strict;
const sinon = require("sinon");
describe("parsing test", () => {
    it("should parse XML file to JSON format", (done)=>{
        const db = {
          save: () => {
            done()
          }
        };

        parser("CodeTest-XML.xml", db);
    });
});
