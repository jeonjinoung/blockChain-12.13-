var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./route/index");
var usersRouter = require("./route/users");

const maria = require("./database/connect/maria");
maria.connect();

// app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
