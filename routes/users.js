var async = require('async');
var md5 = require('md5');

exports.login = function (req, res) {

    async.auto({
        'checkForParameters': function (cb) {

            if (req.body.email && req.body.password && req.body.email.trim() != "" && req.body.password.trim() != "") {
                cb(null);
            }
            else {
                res.send({
                    "status": 400,
                    "message": "parameter missing",
                    "data": {}
                })
            }

        },
        'validateUser': ['checkForParameters', function (abcd,cb) {

            var sql = "Select id from users where email = '"+req.body.email+"' and password = '"+md5(req.body.password)+"' limit 1";
            connection.query(sql, [], function (err, result) {

                if (err) {
                    cb(err);
                }
                else {

                    if (result.length) {
                        cb();
                    }
                    else {
                        res.send({
                            "status": 300,
                            "message": "Invalid credentials",
                            "data": {}
                        })
                    }
                }

            })


        }]
    }, function (err, result) {

        if (err) {
            res.send({
                "status": 402,
                "message": "Some internal error occured in system",
                "data": {}
            })
        }
        else {
            res.send({
                "status": 200,
                "message": "Successfull login",
                "data": {}
            })
        }


    })


}