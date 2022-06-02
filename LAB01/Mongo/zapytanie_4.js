db = connect("localhost:27017/nbd")
printjson( 
	db.people.find( 
	{$and:[{"weight":{$gte:"68.0"}}, {"weight":{$lt:"71.5"}}]}, {"first_name":1,"last_name":1, "weight":1}).toArray()
)

