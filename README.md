# Learn-Css

This repository will help you learn advance technique in Css. Learn how everything works in Css and how to use it in your project.

[Link to Open the Page to Learn FlexBox Practically]("Flex")

## Table of Contents

- Flexbox
- Measuring Units
- Positioning
- Hover and Animation
- Media Query
- Responsive Design
- Blending Javascript with Css

## Flex Box

Flexbox is a method of arranging elements inside a container to control their layout. FlexBox is the most convienent way to arrange multiple elements with minimal code. The elements styled with FlexBox are easy to be redesign for responsive sizes.

In this repository we will learn what are the properties and attributes in flexbox and how to use them.

Topics covered in FlexBox:

- Flex Direction
- Justify Content
- Align Items
- Align Content
- Flex Wrap
- Align Self
- Flex (Shorthand for Flex Grow, Shrinking and Flex Basis)

### Flex Direction

It is used to set the direction of the elements inside the container. There are mainly 4 directions in which the elements can be arranged.

Attributes:

- Row
- Row Reverse
- Column
- Column Reverse

### Justify Content

Justify content is used to align the elements inside the container. It is used to align the elements in the main axis. The main axis is the axis in which the elements are arranged. The main axis is the same as the direction of the elements. The Main axis changes if the direction of the elements is changed in Flex direction

Attributes:

- Flex Start
- Flex End
- Center
- Space Between
- Space Around
- Space Evenly

### Align Items

Align items is used to align the elements in the cross axis. The cross axis is the axis perpendicular to the main axis. The cross axis is the same as the direction of the elements. The cross axis changes if the direction of the elements is changed in Flex direction

Attributes:

- Flex Start
- Flex End
- Center
- Baseline
- Stretch

### Align Content

Align Content is used to same as justify content by it is used when there are multiple elements in one row and in align content view the main axis is cross axis and the cross axis is main axis.

Attributes:

- Flex Start
- Flex End
- Center
- Space Between
- Space Around
- Stretch

### Flex Wrap

Flex wrap is used to wrap the elements within a container if there are coming out of it or the container space isn't enough to hold all the elements.

Attributes:

- Nowrap
- wrap
- wrap-reverse

### Align Self

Align Self is used to align on single element in container. It works same as align items but on the element on which the property is applied.

Attributes:

- Flex Start
- Flex End
- Center
- Baseline
- Stretch

### Flex

Flex is a short hand property of the 3 properties together Flex Grow, Flex Shrink and Flex Basis.

Flex Grow - It is used to set the growth factor of an element. It is used to set the ratio of the element to grow in the container. The default value is 0. The property works when the window size is increased.

Flex Shrink - It is used to set the shrink factor of an element. It is used to set the ratio of the element to shrink in the container. The default value is 1. The property works when the window size is decreased.

Flex Basis - It is used to set the initial size of the element. It is used to set the initial size of the element in the container. The default value is auto. The property works when the window size is increased or decreased.
