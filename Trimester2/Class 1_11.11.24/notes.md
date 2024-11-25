The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree structure where each node is an object representing a part of the document. This model is constructed as a tree of Objects:

**Document:** The root node that represents the entire HTML document.
**Elements:** Represent each tag in the HTML document. These are the nodes that have children (inner elements or text).
**Attributes:** Define properties of elements, such as class, id, or style.
**Text:** The actual text within elements is also considered a node.

DOM performs the following operations:
1. Read
2. Create
3. Delete
4. Update

*NodeList* and *Array* are different
**NodeList** Array methods cannot be used on NodeLists

**EventObject** is passed in the call back function of the event listner that holds all the details of that event linked to that element
#Syntax:
variable.addEventListner('event', function(e)).......