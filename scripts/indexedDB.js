const DB_NAME_PRODUCT = "db_product";
const TAB_NAME_PRODUCT = "TAB_NAME_PROD";

const create_db = (dbname, table) => {
  const db = new Dexie(dbname);
  db.version(2).stores(table);
  db.open();
  return db;
};

const f1 = async () => {
  let define_table_product = {};
  define_table_product[TAB_NAME_PRODUCT] = `++id, name, seller, price`;

  let db = create_db(DB_NAME_PRODUCT, define_table_product);

  var Product = db[TAB_NAME_PRODUCT].defineClass({
    shoeSize: Number,
    address: {
      street: String,
      city: String,
      country: String,
    },
  });
  Product.prototype.log = function () {
    console.log(JSON.stringify(this));
  };
  // const obj1 = await db[TAB_NAME_PRODUCT].where({id: 5});
  //   const obj1 = await db[TAB_NAME_PRODUCT].where('id').between(1,10).count(function(count) {
  //     console.log("I have " + count);
  // });
  // const obj1 = await db[TAB_NAME_PRODUCT].where("id")
  //   .between(1, 10)
  //   .toArray();
  // console.log(obj1);

  // FOR TEST START
  ////// insert new
  let flag = insert(db[TAB_NAME_PRODUCT], {
    name: "1",
    seller: `2`,
    price: `3`,
    shoeSize: 41,
    time: `${new Date()}`
  });

  ////// update
  // const updatedRecord = {
  //   name: `proname.value3`,
  //   seller: `seller.value3`,
  //   price: `33.33`,
  // };
  // update(db[TAB_NAME_PRODUCT], 3, updatedRecord)

  ////// Delete
  // deleteRec(db[TAB_NAME_PRODUCT], 25);
  // FOR TEST END
};

// add new record to DB
const insert = (dbtable, record) => {
  // let flag = empty(record);
  const flag = true;
  // check before insert
  if (flag) {
    dbtable.bulkAdd([record]);
    console.log("data inserted successfully...!");
  }
  return flag;
};

const update = (dbtable, idUpdate, updatedRecord) => {
  dbtable.get(idUpdate, function (data) {
    if (data.id) {
      dbtable.update(idUpdate, updatedRecord).then((updated) => {
        let get = updated ? `data updated` : `couldn't update data`;
        console.log(get);
      });
    }
  });
};

const deleteRec = (dbtable, idDelete) => {
  dbtable.get(idDelete, function (data) {
    if (data.id) {
      dbtable.delete(data.id).then((a) => {
        console.log(`delete data :`, data.id);
      });
    }
  });
};

f1();
