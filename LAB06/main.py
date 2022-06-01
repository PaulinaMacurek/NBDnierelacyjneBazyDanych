from riak import RiakClient

# ustawienie
PORT = 8087
BUCKET = "s26432"
KEY = "LAB6"

# połączenie z bazą
client = RiakClient(pb_port=PORT)
bucket = client.bucket(BUCKET)

# załadowanie dokumentu
document = {"wiek": 98, "merried": True, "last_name": "Kowalski"}
bucket.new(KEY, data=document).store()

# pobranie dokumentu z bazy
fetched = bucket.get(KEY)
read_val = fetched.data
print("Dokument w bazie przed edycją:  ", read_val)

# uaktualnienie dokumentu
fetched.data["wiek"] = 99
fetched.store()

#ponowne pobranie dokumentu z bazy
fetched = bucket.get(KEY)
read_val = fetched.data
print("Dokument w bazie po edycji:  ", read_val)


# usunięcie dokumentu
fetched.delete()

# pobranie po usunięciu dokumentu
fetched = bucket.get(KEY)
read_val = fetched.data
print("Pobranie po usunięciu dokumentu:", read_val)

