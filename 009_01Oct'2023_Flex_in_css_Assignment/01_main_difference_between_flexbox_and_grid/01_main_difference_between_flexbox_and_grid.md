## Main difference between the CSS Flexbox layout model and the CSS Grid layout model
## Flexbox layout model
The CSS Flexbox offers a one-dimensional layout. It is helpful in allocating and aligning the space among items in a container (made of grids). It works with all kinds of display devices and screen sizes.

To get started you have to define a container element as a grid with display: flex;

## Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .main{
            display: flex; 
            grid: auto auto / auto auto auto auto; 
            grid-gap: 10px; 
            background-color: green; 
            padding: 10px; 
        }
        .gfg { 
            background-color: rgb(255, 255, 255); 
            text-align: center; 
            padding: 25px 0; 
            font-size: 30px; 
        } 
    </style>
</head>
<body>
    <h2 style="text-align: center;">
          Welcome To GeeksForGeeks
      </h2>
    <div class="main">
        <div class="gfg">Home</div>
        <div class="gfg">Read</div>
        <div class="gfg">Write</div>
        <div class="gfg">About Us</div>
        <div class="gfg">Contact Us</div>
        <div class="gfg">Privacy Policy</div>
    </div>
</body>
</html>

```

## Grid layout model
CSS Grid Layout, is a two-dimensional grid-based layout system with rows and columns, making it easier to design web pages without having to use floats and positioning. Like tables, grid layout allow us to align elements into columns and rows.

To get started you have to define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, and then place its child elements into the grid with grid-column and grid-row.

## Example
```<!DOCTYPE html>
<html lang="en">
<head>
	<style>
		.main{
			display: grid; 
			grid: auto auto / auto auto auto auto; 
			grid-gap: 10px; 
			background-color: green; 
			padding: 10px; 
		}
		.gfg { 
			background-color: rgb(255, 255, 255); 
			text-align: center; 
			padding: 25px 0; 
			font-size: 30px; 
		} 
	</style>
</head>
<body>
	<h2 style="text-align: center;">
		Welcome To GeeksForGeeks
	</h2>
	<div class="main">
		<div class="gfg">Home</div>
		<div class="gfg">Read</div>
		<div class="gfg">Write</div>
		<div class="gfg">About Us</div>
		<div class="gfg">Contact Us</div>
		<div class="gfg">Privacy Policy</div>
	</div>
</body>
</html>
```
## When to use each:
-Use Flexbox when you're working with a single dimension, like arranging items in a row or column, or when you need to distribute space along one axis.

-Use Grid when you need to create a two-dimensional layout with rows and columns, especially for larger, more complex layouts.