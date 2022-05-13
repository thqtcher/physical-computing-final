#file used to take screenshot to baseline rectangle mappings off of
import cv2

cam = cv2.VideoCapture(0)
  

result, image = cam.read()

if result:

    cv2.imshow("img_to_map", image)

    cv2.imwrite("img_to_map.png", image)
  

    cv2.waitKey(0)
    cv2.destroyWindow("img_to_map")
  

else:
    print("No image detected. Please! try again")