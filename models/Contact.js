// DATABASE CONNECTION
const config = {
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user:	'b091885629c826',
    password:		'274fcce1',
    database: 'heroku_d43994162333328'
  }

const mysql = require('mysql')
const db = mysql.createConnection(config);
db.connect()

const tableName = 'phones'

class Contact {
    fetchAll(callback){

        let sql = "SELECT * FROM ??";
        let inserts = [tableName];
        sql = db.format(sql, inserts);

        db.query(sql,(err, data) => {
            return callback(err, data)
        })

    }
    insert(data, callback){
        
        let firstName = data.firstName.trim()
        firstName = firstName.replace(/^\w/, c => c.toUpperCase());
        let lastName = data.lastName.trim()
        lastName = lastName.replace(/^\w/, c => c.toUpperCase());
        let phone = data.phone.trim()

        let sql = "INSERT INTO ?? (first_name, last_name, phone) VALUES ( ?, ?, ?)";
        let inserts = [tableName, firstName, lastName, phone];
        sql = db.format(sql, inserts);
       
        db.query(sql,(err, data) => {
            return callback(err, data)
        })

    }
    findById(id, callback){

        let sql = "SELECT * FROM ?? WHERE id = ?";
        let inserts = ['phones', id];
        sql = db.format(sql, inserts);
       
        db.query(sql,(err, data) => {
            return callback(err, data)
        }) 

    }
    update(id, data, callback){

        let firstName = data.firstName.trim()
        firstName = firstName.replace(/^\w/, c => c.toUpperCase());
        let lastName = data.lastName.trim()
        lastName = lastName.replace(/^\w/, c => c.toUpperCase());
        const phone = data.phone.trim()

        let sql = 'UPDATE ?? SET first_name=?, last_name=?, phone=? WHERE id=?'
        let inserts = [tableName, firstName, lastName, phone, id];
        sql = db.format(sql, inserts);

        db.query(sql,(err, data) => {
            return callback(err, data)
        })

    }
    delete(id, callback){

        let sql = "DELETE FROM ?? WHERE id = ?";
        let inserts = [tableName, id];
        sql = db.format(sql, inserts);
    
        db.query(sql,(err, data) => {
            return callback(err, data)
        })

    }
}

module.exports = new Contact