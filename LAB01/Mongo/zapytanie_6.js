db = connect("localhost:27017/nbd")
printjson(
db.people.insert({
	"sex" : "Female",
	"first_name" : "Paulina",
	"last_name" : "Macurek",
	"job" : "nauczycielka",
	"email" : "s26432@pjwsnt.edu.pl",
	"location" : {
		"city" : "Koscierzyna",
		"address" : {
			"streetname" : "Wiosenna",
			"streetnumber" : "9"
		}
	},
	"description" : "jakis opis",
	"height" : "164.04",
	"weight" : "63.10",
	"birth_date" : "1987-08-26T02:55:03Z",
	"nationality" : "Poland",
	"credit" : [
		{
			"type" : "switch",
			"number" : "6759888939100098699",
			"currency" : "PL",
			"balance" : "5117.06"
		}
		]
	})
)
printjson( 
	db.people.find({
		last_name: "Macurek"
	})
)
