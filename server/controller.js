module.exports = {
  create: (req, res, next) => {
    let db = req.app.get("db");
    const { name, image, price } = req.body;

    db.add_products([name, image, price])
      .then(() => res.sendStatus(200).send())
      .catch(err => {
        res.status(500).send({ err: "Adding product ERROR" });
        console.log(err);
      });
  },

  get_products: (req, res, next) => {
    const db = req.app.get("db");
    db.get_products()
      .then(products => res.status(200).send(products))
      .catch(err => res.status(500).send({ getProductsError: err }));
  },
  delete: (req, res, next) => {
    const { params } = req;
    const db = req.app.get("db");

    db.delete_product(params.id)
      .then(res.status(200).send())
      .catch(err => res.status(500).send("Delete ERROR"));
  },
  update: (req, res, next) => {
    const { id } = req.params;
    const { name, image, price } = req.body;
    const db = req.app.get("db");

    db.update_product([id, name, image, price])
      .then(product => res.status(200).send(product))
      .catch(err => console.log(err));
  }
};
