var express = require("express");
var router = express.Router();

const maria = require("../database/connect/maria");

router.get("/", function (req, res, next) {
    res.render("indxex", { title: "Express" });
});

router.get("/create", function (req, res) {
    maria.query(
        "CREATE TABLE DEPARTMENT (" +
            "DEPART_CODE INT(11) NOT NULL," +
            "NAME VARCHAR(200) NULL DEFAULT NULL COLLATE utf8mb3_general_ci," +
            "PRIMARY KEY (DEPART_CODE) USING BTREE)",
        function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            } else {
                console.log("err : " + err);
                res.send(err);
            }
        }
    );
});

router.get("/drop", function (req, res) {
    maria.query("DROP TABLE DEPARTMENT", function (err, rows, fields) {
        if (!err) {
            res.send(rows);
        } else {
            console.log("err : ", +err);
            res.send(err);
        }
    });
});

router.get("/insert", function (req, res) {
    maria.query(
        'INSERT INTO DEPARTMENT(DEPART_CODE,NAME) VALUES(5001,"ENGLISH")',
        function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            } else {
                console.log("err : ", +err);
                res.send(err);
            }
        }
    );
});

router.get("/select", function (req, res) {
    maria.query("SELECT * FROM DEPARTMENT", function (err, rows, fields) {
        if (!err) {
            res.send(rows);
        } else {
            console.log("err : ", +err);
            res.send(err);
        }
    });
});

router.get("/update", function (req, res) {
    maria.query(
        'UPDATE DEPARTMENT SET NAME="UPD ENG" WHERE DEPART_CODE=5001',
        function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            } else {
                console.log("err : ", +err);
                res.send(err);
            }
        }
    );
});

router.get("/delete", function (req, res) {
    maria.query(
        "DELETE FROM DEPARTMENT WHERE DEPART_CODE=5001",
        function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            } else {
                console.log("err : ", +err);
                res.send(err);
            }
        }
    );
});

module.exports = router;
