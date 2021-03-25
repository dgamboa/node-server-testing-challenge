exports.seed = function (knex) {
  return knex("companies")
    .truncate()
    .then(function () {
      return knex("companies").insert([
        { name: "Stripe", technology: 1 },
        { name: "Google", technology: 1 },
        { name: "Exxon" },
        { name: "FedEx", technology: 0 },
      ]);
    });
};
