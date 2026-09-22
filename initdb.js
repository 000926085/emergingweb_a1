const sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("database.db");

db.serialize(function() {
    db.run("DROP TABLE IF EXISTS Games");
    db.run("CREATE TABLE Games (name TEXT, description TEXT, price DECIMAL, stock INTEGER)");
    db.run("INSERT INTO Games VALUES (?,?,?,?)", [
        'Ticket to Ride', 
        'All aboard! Collect trains, choo-choo-choose your routes, fulfill your destination!', 
        '42.99',
        '8'
    ]);
    db.run("INSERT INTO Games VALUES (?,?,?,?)", [
        'Slay the Spire: The Board Game', 
        'Craft a unique deck, discover powerful relics, and Slay the Spire together!', 
        '104.99',
        '4'
    ]);
    db.run("INSERT INTO Games VALUES (?,?,?,?)", [
        'On Mars', 
        'Be a part of the first Martian colony, striving to be the best contributor.', 
        '129.99',
        '2'
    ]);
});