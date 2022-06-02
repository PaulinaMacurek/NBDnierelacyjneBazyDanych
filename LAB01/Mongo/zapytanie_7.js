db = connect("localhost:27017/nbd")
printjson(db.people.remove({"height":{$gt:"190.00"}}))
