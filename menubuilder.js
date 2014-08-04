/**
 * @license menubuilder.js v1.0.0
 * (c) 2014 Daniel Smith http://www.danmasta.com
 * License: MIT
 */

// create dynamic nested menus
(function(window, undefined){ 'use strict';

  function menuBuilder(){
    var _this = this;

    // list of stored menu objects
    this.menus = {};

    // add menu object to menus list
    this.addMenu = function(menu, name){
      _this.menus[name] = menu;
    };

    // get menu object by name
    this.getMenu = function(name){
      return _this.menus[name];
    };

    // create fragment
    this.createFragment = function(){
      return document.createDocumentFragment();
    };

    // create element by tagname
    this.createElement = function(tag){
      return document.createElement(tag);
    };

    // get all elements by css selector
    this.getElements = function(selector){
      return document.querySelectorAll(selector);
    };

    // get first element by css selector
    this.getElement = function(selector){
      return document.querySelector(selector);
    };

    // check if object is an array
    this.isArray = function(array){
      return array instanceof Array;
    };

    // add class to dom node
    this.addClass = function(node, classname){
      node.classList.add(classname);
      return node;
    };

    // add list item to menu
    this.addMenuItem = function($menu, item){
      var li = _this.createElement('li');
      var a = _this.createElement('a');
      a.href = item.url;
      a.innerHTML = item.title;
      li.appendChild(a);
      if(_this.isArray(item.children) && item.children.length){
        li.appendChild(_this.addChildMenu(li, item.children));
        return $menu.appendChild(_this.addClass(li, 'has-child'));
      } else {
        return $menu.appendChild(li);
      }
    };

    // add child menu items
    this.addChildMenu = function($parent, children){
      var fragment = _this.createFragment();
      var ul = _this.createElement('ul');
      for(var i = 0; i < children.length; i++){
        _this.addMenuItem(ul, children[i]);
      }
      return fragment.appendChild($parent.appendChild(ul));
    };

    // create menu from dom node and array of menu objects
    // will accept an array of menu items or a menu key value
    this.createMenu = function(node, array){
      console.time('menu.create');
      if(!_this.isArray(array)) array = _this.getMenu(array);
      var fragment = _this.createFragment();
      for(var i = 0; i < array.length; i++){
        _this.addMenuItem(fragment, array[i]);
      }
      node.appendChild(fragment);
      console.timeEnd('menu.create');
    };
  };

  window.menuBuilder = new menuBuilder();

})(window);
