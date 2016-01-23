# autobid

#####Autobid will allow a user to post 'projects' detailing repairs needed to be done to a car. Mechanics will then be able to bid on the project. Currently there are 3 tables: projects, accounts and comments. Mechanics can bid using the comments  table, which has FKs for accounts and projects.

##### wireframe: https://moqups.com/#!/edit/kevin3730/lFfmdaPK

##### Summary of Technologies Used: MVC is built using Ruby on Rails. Backbone (in conjunction with underscore) is used to bind models and views, currently this renders models to collections once submitted by the user but does not render to the view. Views are rendered with embedded Ruby and a customized Bootsrap framework is used for styling. ActiveRecord is used to connect to the Postgresql database which contains three tables (comments, accounts and projects) while defined relationships control for users accessing customized data (only able to view/edit one's own projects).
