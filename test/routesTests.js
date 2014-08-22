var express = require('express');
var request = require('supertest');
var app = require('../app');
var chai = require('chai');
var expect = chai.expect;

describe('app.route', function() {
    it('/ should be ok', function (done) {
        request(app).get('/').end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });

    });

    it('/tasks should be ok', function (done) {
        request(app).get('/tasks').end(function(err, res) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it('/users should be ok', function (done) {
        request(app).get('/users').end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});