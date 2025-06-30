const { model } = require("mongoose");

const { PositionSchemas } = require("../schemas/PositionSchemas");

const PositionModel = new model("position", PositionSchemas);

module.exports = { PositionModel };
