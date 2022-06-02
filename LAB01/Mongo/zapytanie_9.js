db = connect("localhost:27017/nbd")
printjson( 
	db.people.update(
		{first_name: "Antonio"},
		{$push: {hobby: "pingpong"}},
		{"multi": true}
	)
)
