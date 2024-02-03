# Сourse Work
## Install Project
To configure project and start working you need:

1. Run **make init** and **make build** to build project and all services
2. Run **make up** to start project services
3. Run **make init** again, to make base configuration, run migrations and other

Congratulations! You can use project now.
## Work with project
Project helps to get user orders and work with them. After user create order by filling and submitting form on the end of the main page, it will be shown in the admin panel.
* Admin panel route is **/admin**.
* Base admin credentials is: 
    * Email: *admin@admin.ru*
    * Password: *admin*
* You can change admin credentials from admin panel

## Exceptions
* If admin panel loading without styles, then 
    1. Run **make app**
    2. Then inside the container run **php artisan backpack:install** (answer *no* on all questions)
    3. Then exit from container by typing **exit**
    4. And after that type **npm run dev**