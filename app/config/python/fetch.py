import random
#import numpy
import requests as req
import json


resp = req.get("http://10.53.133.54/lot_data.json?r=" + str(random.randint(0,100000)))

#print(resp.json())
print("ran")
with open("lot_data.json","w") as f:
        json.dump(resp.json(),f)