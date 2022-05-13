import cv2
import pickle



#width and height determined by rect x2-x1 and y2-y1
#990,553 219, 90
#size of rectangles to be drawn
width, height = 120, 160
try:
    with open("MappedLot","rb") as f:
        posArray = pickle.load(f)
except:
    #array of positions
    posArray = []

def mouseClicked(events, x, y, flags, params):
    #add position of where to draw rectangle 
    if events == cv2.EVENT_LBUTTONDOWN:
        posArray.append((x,y))
    #remove rectangle
    if events == cv2.EVENT_RBUTTONDOWN:
        for i,pos in enumerate(posArray):
            x1,y1 = pos
            if x1<x<x1+width and y1<y<y1+height:
                posArray.pop(i)
    #add rectangle object to pickle to save on image 
    with open("MappedLot","wb") as f:
        pickle.dump(posArray,f)

while True:
    
    img = cv2.imread("img_to_map.png")
    for pos in posArray:
        #draw rectangle based on x,y locations defined by mouse click
        cv2.rectangle(img,pos,(pos[0]+ width, pos[1] + height),(255,0,0), 2)

    cv2.imshow("Image",img)
    cv2.setMouseCallback("Image",mouseClicked)
    cv2.waitKey(1)
