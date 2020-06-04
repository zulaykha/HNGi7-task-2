import json

user = {"name":"Wamuyu Wanjohi" , "id":"HNG-05307" , "email":"wamuyuwanjohi97@gmail.com" , "language":"python" }
def hellouser(user):
  print("Hello world this is " + user["name"] + " with HNGi7 ID " + user["id"] + "and email " + user["email"]+"using " + user["language"] + " for stage 2 task ." , flush=True )
  return user

hellouser(user)