from pydoc import doc
import cv2
import pickle
import cvzone
import numpy as np
import json
#turn on webcam
cap = cv2.VideoCapture(0)
#width and height of rectangles
width, height = 120, 160
#initialize parking lot map to indicate every spot as empty
parkingLot = [0,0,0,0,0,0,0,0,0,0]
with open("MappedLot","rb") as f:
        posArray = pickle.load(f)

def checkParkingSpace(filteredImg):
    bool = False
    for pos in posArray:
        x,y = pos
        
        #crop whats inside each rectangle
        imgCrop = imgDilate[y:y + height,x:x + width]

        cv2.imshow(str(x*y),imgCrop)
        #get pixel count of cropped image
        count = cv2.countNonZero(imgCrop)
        #add text which displays pixel count inside rectangle for testing purposes
        cvzone.putTextRect(img,str(count),(x,y+height-5), scale = 1.5,thickness = 2, offset = 0)
        #add certain threshold of how many pixels can be allowed for a
        #parking place to be considered "available"
        if count < 600:
            color = (0,255,0)
            if parkingLot[posArray.index(pos)] == 1:
                bool = True
            parkingLot[posArray.index(pos)] = 0
            thickness = 5
            
        else:
            color = (0,0,255)
            thickness = 2
            if parkingLot[posArray.index(pos)] == 0:
                bool = True
            parkingLot[posArray.index(pos)] = 1
        #draw rectangles over available spots
        cv2.rectangle(img,pos,(pos[0]+ width, pos[1] + height),color, thickness)
    #boolean here represents if a spot has become open or unavailable
    #bool is updated only when there is a change so true represents a change
    return bool   



while True:

    success, img = cap.read()
    #series of image conversions to convert image 
    #to have binary pixel values based on color
    imgGray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray,(3,3), 1)
    imgThreshold = cv2.adaptiveThreshold(imgBlur,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv2.THRESH_BINARY_INV,25,16)
    imgMedian = cv2.medianBlur(imgThreshold,5)
    kernel = np.ones((3,3),np.uint8)
    imgDilate = cv2.dilate(imgMedian, kernel, iterations = 1)
    
    bool = checkParkingSpace(imgDilate)
    #if change update json file with accurate array
    if bool:
        data = {"lot": parkingLot}
        print("here")
        json_obj = json.dumps(data)
        print(json_obj)
        
        with open("lot_data.json","w") as f:
            json.dump(data,f)
        

    
        

    
    cv2.imshow("parkingLot",img)
    cv2.waitKey(1)