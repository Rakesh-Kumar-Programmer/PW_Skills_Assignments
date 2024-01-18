## Role of the following key properties in the flexbox layout model      
## 1. justify-content
The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis.
```
div {
  display: flex;
  justify-content: center;
}
``` 
## 2. align-items
The align-items property specifies the default alignment for items inside a flexbox or grid container:-
* In a flexbox container , the flexbox items are aligned on the cross axis, which is vertical by defult (opposite of flex-direction).
* In a grid container, the grid items are aligned in the block direction. For pages in english, block direction is downward and inline direction is left to right.

* its has many values:strech,center,flex-start,flex-end,start,end,baseline,intial,inherit
```
div {
  display: flex;
  align-items: flex-start;
}
```
```
div {
  display: flex;
  align-items: flex-end;
}
```
```
#container {
  display: grid;
  align-items: start;
}
```
```
#container {
  display: grid;
  position: relative;
  align-items: end;
}

#container > div {
  position: absolute;
}
```
## 3. gap
The gap property defines the size of the gap between the row and between the columns in flex, grid or multi-column layout. it is a shorthand for the following properties:
* row-gap
* column-gap
```
#flex-container {
  display: flex;
  gap: 20px 70px;
}
```
## 4. flex-direction
The flex-direction property specifies the direction of the flexible items.
```
div {
  display: flex;
  flex-direction: row-reverse;
}
```
## 5. flex-wrap
The flex-wrap property specifies whether the flexible items should wrap or not.
```
div {
  display: flex;  
  flex-wrap: wrap;
}
```


