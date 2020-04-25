# Django-JWT-React Boilerplate

Boilerplate for Django & ReactJS bundle with Authentication using JWT. Instead of separating ReactJS Frontend and Django Backend API, the 2 components are bundled together. The *index.html* is rendered by Django Templating system, while the rest of the application is loaded by ReactJS 

PROS:
- Get the best of both worlds of Django and ReactJS
- Use Django for Authentication 
- No CORS settings needed

CONS:
- No live reload on JS

## Technologies
- Django 3.0.4
- ReactJS 16.13.1
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Rest Framework - SimpleJWT](https://github.com/SimpleJWT/django-rest-framework-simplejwt)
- Babel
- Webpack
- Pip

## Local Development Setup

### Backend
- Set pipenv and install dependencies (do this only once)
```
$ pipenv --python 3.7
$ pipenv install django djangorestframework djangorestframework-simplejwt
```
- Setup DB and Create super user
```
$ ./djsr/manage.py makemigrations
$ ./djsr/manage.py migrate
$ ./djsr/manage.py createsuperuser
```
- Run server application
```
$ ./djsr/manage.py runserver
```
- Create normal user from Admin UI http://localhost:8000/admin. Login as super user

### Frontend
- FE routes must end in "/"

## Deployment


## References
- https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta
- Modified some codes especially on usage of Axios


