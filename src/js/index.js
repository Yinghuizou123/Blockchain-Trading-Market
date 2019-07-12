var mysql = require("mysql");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var alert = require("alert-node");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19981002",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS Airline0", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19981002",
  multipleStatements: true
});
con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS Airline1", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19981002",
  multipleStatements: true
});
con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS Airline2", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19981002",
  multipleStatements: true
});
con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS RequestAirline", function(
    err,
    result
  ) {
    if (err) throw err;
    console.log("Database created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19981002",
  multipleStatements: true
});
con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS RegisteredAirline", function(
    err,
    result
  ) {
    if (err) throw err;
    console.log("Database created");
  });
});

app.get("/", function(req, res) {
  res.sendFile("/Users/Jack/Desktop/CSE410PROJECT2/index.html");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19981002",
    database: "Airline1",
    multipleStatements: true
  });
  con.query(
    "CREATE TABLE IF NOT EXISTS customer (id INT AUTO_INCREMENT PRIMARY KEY, customerName VARCHAR(255), fromPlace VARCHAR(255), toPlace VARCHAR(255), ticketPrice INT UNSIGNED NOT NULL)"
  );
  con.query("select * from customer", function(err, rows) {
    if (err) throw err;

    resultJSON = JSON.stringify(rows);
    resultJSON = JSON.parse(resultJSON);
    app.get("/showTable", function(req, res) {
      res.send(resultJSON);
    });
  });
});
var currentAirline = 0;
app.post("/register", urlencodedParser, function(req, res) {
  if (currentAirline == 0) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "19981002",
      database: "Airline0",
      multipleStatements: true
    });
    con.query(
      "CREATE TABLE IF NOT EXISTS customer (id INT AUTO_INCREMENT PRIMARY KEY, customerName VARCHAR(255), fromPlace VARCHAR(255), toPlace VARCHAR(255), ticketPrice INT UNSIGNED NOT NULL); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('JOE','buffalo','Boston','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Jack','buffalo','New York','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Kelvin','buffalo','Fuzhou','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Ying','buffalo','New York','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Michael','buffalo','Fuzhou','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Leon','buffalo','Boston','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Eric','buffalo','New York','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Ming','buffalo','New York','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Tim','buffalo','Boston','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Katie','buffalo','Fuzhou','100')"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS airline (id INT AUTO_INCREMENT PRIMARY KEY, fromWhere VARCHAR(255), toWhere VARCHAR(255), ticketLeft INT UNSIGNED NOT NULL); INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','New York','5');INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','Boston','5');INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','Fuzhou','5')"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS info (id INT AUTO_INCREMENT PRIMARY KEY, value INT UNSIGNED NOT NULL); INSERT INTO info (value) VALUE ('5000'); "
    );

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "19981002",
      database: "RegisteredAirline",
      multipleStatements: true
    });
    con.query(
      "CREATE TABLE IF NOT EXISTS registeredAccount (id INT AUTO_INCREMENT PRIMARY KEY, address INT UNSIGNED NOT NULL); INSERT INTO registeredAccount (address) VALUE ('111'); "
    );
  } else if (currentAirline == 1) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "19981002",
      database: "Airline1",
      multipleStatements: true
    });
    con.query(
      "CREATE TABLE IF NOT EXISTS customer (id INT AUTO_INCREMENT PRIMARY KEY, customerName VARCHAR(255), fromPlace VARCHAR(255), toPlace VARCHAR(255), ticketPrice INT UNSIGNED NOT NULL); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('JOE','buffalo','Boston','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Jack','buffalo','New York','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Kelvin','buffalo','Fuzhou','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Ying','buffalo','New York','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Michael','buffalo','Fuzhou','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Leon','buffalo','Boston','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Eric','buffalo','New York','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Ming','buffalo','New York','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Tim','buffalo','Boston','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Katie','buffalo','Fuzhou','100')"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS airline (id INT AUTO_INCREMENT PRIMARY KEY, fromWhere VARCHAR(255), toWhere VARCHAR(255), ticketLeft INT UNSIGNED NOT NULL); INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','New York','5');INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','Boston','5');INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','Fuzhou','5')"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS info (id INT AUTO_INCREMENT PRIMARY KEY, value INT UNSIGNED NOT NULL); INSERT INTO info (value) VALUE ('5000'); "
    );
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "19981002",
      database: "RegisteredAirline",
      multipleStatements: true
    });
    con.query(
      "CREATE TABLE IF NOT EXISTS registeredAccount (id INT AUTO_INCREMENT PRIMARY KEY, address INT UNSIGNED NOT NULL); INSERT INTO registeredAccount (address) VALUE ('222'); "
    );
  } else if (currentAirline == 2) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "19981002",
      database: "Airline2",
      multipleStatements: true
    });
    con.query(
      "CREATE TABLE IF NOT EXISTS customer (id INT AUTO_INCREMENT PRIMARY KEY, customerName VARCHAR(255), fromPlace VARCHAR(255), toPlace VARCHAR(255), ticketPrice INT UNSIGNED NOT NULL); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('JOE','buffalo','Boston','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Jack','buffalo','New York','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Kelvin','buffalo','Fuzhou','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Ying','buffalo','New York','100'); INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Michael','buffalo','Fuzhou','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Leon','buffalo','Boston','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Eric','buffalo','New York','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Ming','buffalo','New York','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Tim','buffalo','Boston','100');INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES ('Katie','buffalo','Fuzhou','100')"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS airline (id INT AUTO_INCREMENT PRIMARY KEY, fromWhere VARCHAR(255), toWhere VARCHAR(255), ticketLeft INT UNSIGNED NOT NULL); INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','New York','5');INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','Boston','5');INSERT INTO airline (fromWhere, toWhere, ticketLeft) VALUE ('buffalo','Fuzhou','5')"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS info (id INT AUTO_INCREMENT PRIMARY KEY, value INT UNSIGNED NOT NULL); INSERT INTO info (value) VALUE ('5000'); "
    );
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "19981002",
      database: "RegisteredAirline",
      multipleStatements: true
    });
    con.query(
      "CREATE TABLE IF NOT EXISTS registeredAccount (id INT AUTO_INCREMENT PRIMARY KEY, address INT UNSIGNED NOT NULL); INSERT INTO registeredAccount (address) VALUE ('333'); "
    );
  } else if (currentAirline >= 3) {
    alert("You can only have three airline");
  }
  currentAirline++;
});

app.post("/requestAirline", urlencodedParser, function(req, res) {
  var airlineFrom = "temp";
  var airlineTransfer = req.body.airlineSelected;
  var userID = req.body.customerID;
  var userName = req.body.customerName;
  var des = req.body.destination;
  var seat = req.body.seatNumber;

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19981002",
    database: "Airline1", //need change here later on
    multipleStatements: true
  });

  con.query("SELECT * FROM customer", function(err, rows) {
    console.log(userID);
    console.log(userName);

    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id == userID && rows[i].customerName == userName) {
        console.log("entered");
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "19981002",
          database: "RequestAirline", //need change here later on
          multipleStatements: true
        });

        con.query(
          "CREATE TABLE IF NOT EXISTS request (id INT AUTO_INCREMENT PRIMARY KEY, airlineF VARCHAR(255), airlineT VARCHAR(255), userID INT UNSIGNED NOT NULL, userName VARCHAR(255), destination VARCHAR(255), seat INT UNSIGNED NOT NULL)"
        );

        con.query(
          "INSERT INTO request (airlineF, airlineT, userID, userName, destination, seat) VALUES (" +
            "'" +
            airlineFrom +
            "'" +
            "," +
            "'" +
            airlineTransfer +
            "'" +
            "," +
            "'" +
            userID +
            "'" +
            "," +
            "'" +
            userName +
            "'" +
            "," +
            "'" +
            des +
            "'" +
            "," +
            "'" +
            seat +
            "'" +
            ")",
          function(err, result) {
            if (err) throw err;
            alert("Your request has been stored in our database");
          }
        );
        break;
      }
    }
    if (i == rows.length) {
      alert("no user found");
    }
  });
});

function updateSeat(airlineNeedUpdate, numberOfSeat, city, confirmationID) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19981002",
    database: airlineNeedUpdate,
    multipleStatements: true
  });
  var updateSeats = 0;
  con.query("SELECT * FROM airline", function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      if (rows[i].toWhere == city) {
        updateSeats = rows[i].ticketLeft - numberOfSeat;
        con.query(
          "UPDATE airline SET ticketLeft = '" +
            updateSeats +
            "'" +
            "WHERE toWhere = '" +
            city +
            "'"
        );
        con.query("DELETE FROM customer WHERE id = '" + confirmationID + "'");
        break;
      }
    }
  });
}

function settlePayment2(oldAirline, ticketPrice2) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19981002",
    database: oldAirline,
    multipleStatements: true
  });
  var updateAmount;
  con.query("SELECT * FROM info ", function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      if (rows[i].id == 1) {
        updateAmount = rows[i].value - ticketPrice2;
        break;
      }
    }
    console.log("total money: " + updateAmount);
    con.query("UPDATE info SET value = '" + updateAmount + "'");
  });
}

function settlePayment(cName, tPlace, newAirline, ticketPrice) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19981002",
    database: newAirline,
    multipleStatements: true
  });
  let buffalo = "buffalo";

  con.query(
    "INSERT INTO customer (customerName, fromPlace, toPlace, ticketPrice) VALUES (" +
      "'" +
      cName +
      "'" +
      "," +
      "'" +
      buffalo +
      "'" +
      "," +
      "'" +
      tPlace +
      "'" +
      "," +
      "100" +
      ")",
    function(err, result) {
      if (err) throw err;
      alert("updated");
    }
  );
  var updateAmount;
  con.query("SELECT * FROM info ", function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      if (rows[i].id == 1) {
        updateAmount = rows[i].value + ticketPrice;
        break;
      }
    }
    console.log("total money: " + updateAmount);
    con.query("UPDATE info SET value = '" + updateAmount + "'");
  });
}

app.post("/responseRequest", urlencodedParser, function(req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19981002",
    database: "RequestAirline",
    multipleStatements: true
  });
  con.query("select * from request", function(err, rows) {
    if (err) throw err;

    let airlineFrom = "";
    let numberOfTicket = 0;
    let updateTicket = 0;
    let finalDes = "";
    let airlineFound = false;
    let userid = 0;
    let username = "";
    let confirmationID;
    console.log(req.body.airlineF);
    for (i = 0; i < rows.length; i++) {
      if (rows[i].airlineF == req.body.airlineFrom) {
        airlineFrom = rows[i].airlineF;
        numberOfTicket = rows[i].seat;
        finalDes = rows[i].destination;
        airlineFound = true;
        userid = rows[i].userID;
        username = rows[i].userName;
        confirmationID = rows[i].id;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "19981002",
          database: "RequestAirline"
        });
        console.log(confirmationID);
        con.query(
          "DELETE FROM request WHERE id = " + "'" + confirmationID + "'",

          function(err, rows) {
            if (err) throw err;
            alert("you have deleted the request!");
          }
        );
        break;
      }
    }

    if (airlineFound) {
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "19981002",
        database: "Airline2", //need change the database later
        multipleStatements: true
      });
      con.query("select * from airline", function(err, rows) {
        if (err) throw err;
        for (i = 0; i < rows.length; i++) {
          if (
            rows[i].toWhere == finalDes &&
            rows[i].ticketLeft > numberOfTicket
          ) {
            alert("request approved");
            updateTicket = rows[i].ticketLeft - numberOfTicket;
            con.query(
              "UPDATE airline SET ticketLeft =" +
                "'" +
                updateTicket +
                "'" +
                "WHERE toWhere = " +
                "'" +
                finalDes +
                "'"
            );
            updateSeat("Airline1", numberOfTicket, finalDes, userid);
            settlePayment(username, finalDes, "Airline2", numberOfTicket * 80);
            settlePayment2("Airline1", numberOfTicket * 20);
            break;
            //do settle payment here
          }
        }
      });
    } else {
      alert("request disapproved");
    }
  });
});

app.listen(process.env.port || 1337, function() {
  console.log("now listenin for request");
});
