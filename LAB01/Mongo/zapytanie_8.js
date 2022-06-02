db = connect("localhost:27017/nbd")
printjson(db.people.update({"location.city":"Moscow"},{$set:{"location.city":"Moskwa"}},{"multi": true}))

