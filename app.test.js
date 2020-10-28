const parser = require("./app");
const assert = require("assert").strict;

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
