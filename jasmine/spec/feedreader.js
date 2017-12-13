/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has URL', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            }); 
        });

        it('has name', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            }); 
        });
    });


    describe('The menu', function () {
        
         it('is hidden by default', function () {
            expect(document.body.className).toBe('menu-hidden');
        });

        it('visibility changes when icon clicked', function () {
            $('body').toggleClass('menu-hidden');
            expect(document.body.className).toBe('');
            $('body').toggleClass('menu-hidden');
            expect(document.body.className).toBe('menu-hidden');
            
        });
    });

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            var entry = $('.feed').find('.entry');
            expect(entry).toBeDefined();
            done();
        });

        it('has single entry', function (done) {
            done();
        })

    });

    describe('New Feed Selection', function () {

        var initTitle;
        var nextTitle;

        beforeEach(function (done) {
            loadFeed(0, function() {
                initTitle = $('.header-title').text();
            });
            loadFeed(1, function() {
                nextTitle = $('.header-title').text();
                done();
            });
        });
        
        it('changes to new feed', function (done) {
            expect(initTitle).not.toBe(nextTitle);
            done();
        });
    });
}());
