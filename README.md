# Burger-2-TheSequel
MVC Burger logger with MySQL, Node, Express, Handlebars and Sequelize ORM

## Live Link
 - pending

### Overview

In this assignment, we created a burger logger with MySQL, Node, Express, Handlebars and use Seuelize as our ORM (yumm!). We followed the MVC design pattern; used Node and Sequelize to query and route data in our app, and Handlebars to generate your HTML.


* Burgers Express! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.


## Check points

#### App Setup

#### Sequwlize DB Setup 

#### Config Setup

#### Model setup

#### Migration setup

#### Controller setup

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   └── config.js
│   
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -


### One More Thing
This is a really tough homework assignment