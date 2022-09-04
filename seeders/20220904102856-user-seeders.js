"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Hakim Fauzi",
          profession: "Software Engineer",
          role: "admin",
          email: "hanif@mail.com",
          password: await bcrypt.hash("Admin!23", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mr. John Wick",
          profession: "Cloud Engineer",
          role: "student",
          email: "johwick@mail.com",
          password: await bcrypt.hash("Admin!23", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
