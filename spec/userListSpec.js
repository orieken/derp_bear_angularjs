var rewire = require('rewire');
var server = rewire(__dirname + './../app.js');
var usersList = server.__get__('usersList');



describe('Derp-BearAngular Routes', function () {

    it('returns an Array', function(done){
        usersList(function(list) {
            expect(list).toBeArray();
            done();
        });
    });

    it('returned array is not empty', function(done){
        usersList(function(list) {
            expect(list).toBeNonEmptyArray();
            done();
        });
    });

    it('returned array item is defined ', function(done){
        usersList(function(list) {
            expect(list[0].id).toBeDefined();
            expect(list[0].first_name).toBeDefined();
            expect(list[0].last_name).toBeDefined();
            expect(list[0].email).toBeDefined();
            expect(list[0].website).toBeDefined();
            expect(list[0].pet).toBeDefined();
            expect(list[0].created_at).toBeDefined();
            expect(list[0].updated_at).toBeDefined();
            done();
        });
    });
});
