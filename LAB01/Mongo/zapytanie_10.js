db = connect("localhost:27017/nbd")
printjson( db.people.update(
		{job: "Editor"},
		{$unset: {email:1}},
		{"multi": true}
	 )
)
