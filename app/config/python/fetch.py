import random
#import numpy
import requests as req
import json

while(True):
        resp = req.get("http://10.53.133.54/lot_data.json?r=" + str(random.randint(0,100000)))

        with open("lot_data.json","w") as f:
                json.dump(resp.json(),f)