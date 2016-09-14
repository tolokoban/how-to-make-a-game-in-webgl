var Tools = require("tools");


describe('Module `tools`', function() {
    it('should complain if the name does not exist', function() {
        expect(function() {
            Tools.expandIncludes({}, 'unknown');
        }).toThrow();
    });

    it('should perform simple includes', function() {
        expect(Tools.expandIncludes({
            main: "#include hello",
            hello: "Hello World!"
        }, 'main')).toEqual("Hello World!");
    });

    it('should accept to include the same file multiple times in the same code', function() {
        expect(Tools.expandIncludes({
            main: "Head\n#include hello\n---\n#include hello\nTail",
            hello: "Hello World!"
        }, 'main')).toEqual("Head\nHello World!\n---\nHello World!\nTail");
    });

    it('should detect and complain on infinite loops of inclusions', function() {
        expect(function() {
            Tools.expandIncludes({
                main: "Yo man\n#include foo",
                foo: "#include bar",
                bar: "Then recurse...\n#include main"
            }, 'main');
        }).toThrow();        
    });

    it('should accept recursive inclusions', function() {
        expect(Tools.expandIncludes({
                main: "Yo man\n#include foo",
                foo: "How are\n#include bar",
                bar: "You?"
            }, 'main')).toEqual("Yo man\nHow are\nYou?");        
    });
});
