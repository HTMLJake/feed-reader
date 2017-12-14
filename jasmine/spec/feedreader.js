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
            expect(document.body.className).toContain('menu-hidden');
        });

        it('visibility changes when icon clicked', function () {
            $('.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            $('.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
            
        });
    });

    describe('Initial Entries', function () {

        var entry;

        beforeEach(function (done) {
            loadFeed(0, function(){
                entry = $('.feed').find('.entry');
                done();
            });
        });
        
        it('has single entry', function (done) {
            expect(entry.length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function () {

        var initTitle;
        var nextTitle;

        beforeEach(function (done) {
            loadFeed(1, function() {
                initTitle = $('.entry:first').text();
                loadFeed(0, function() {
                    nextTitle = $('.entry:first').text();
                    done();
                });
            });
        });
        
        it('changes to new feed', function (done) {
            expect(initTitle).not.toBe(nextTitle);
            done();
        });
    });
}());
