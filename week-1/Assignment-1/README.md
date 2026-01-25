How to center the second hello vertically

![alt text](image.png)


Solution -

Approach 1 - adding padding to h3 tag
this adds space inside the hello box, but doesn't center it vertically. Padding pushes content inward, not align it.
![alt text](image-1.png)

Approach 2 - making h3 (child node) as flex
It only has text inside it ("hello"). Making the h3 a flex container doesn't help because there's nothing to align - the text is already there.
![alt text](image-2.png)

Approach 3 - adding align-itmes : center property to parent div
![alt text](image-3.png)

        