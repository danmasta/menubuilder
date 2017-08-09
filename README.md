menubuilder.js
========

A very small and lightweight javascript plugin for creating nested navigation menus from json objects.

# Usage
You can add a menu object to cache by using:
`menuBuilder.addMenu(array, 'name')`


Menus can be created using:
`menuBuilder.createMenu(domNode, (menu array or menu cache 'name'))`

#### Methods
name | description
---- | ----
`menus` | Returns an object of currently added menus
`addMenu(menu, name)` | Add a menu object to menus list. Accepts a menu array and a name
`getMenu(name)` | Returns a stored menu object by name
`createFragment()` | Returns a new document fragment
`createElement(tag)` | Accepts one parameter as element tag name. Returns a new document element
`getElements(selector)` | Accepts a css selector and returns an array of matching dom nodes
`getElement(selector)` | Accepts a css selector and returns the first matching dom node
`isArray(item)` | Returns boolean, checks if item is an array
`addClass(node, classname)` | Add a class to a dom node, returns dom node after class has been added
`addMenuItem($menu, item)` | Accepts a dom node and an menu item object. Creates a menu list item, recurses if children are found
`addChildMenu($parent, children)` | Accepts a dom node and array of children menu item objects. Creates a child menu inside the parent list item
`createMenu(node, array)` | Accepts a dom node and either an array of menu items, or a string name of a previously added menu object. Initializes and creates the menu on the specified node
