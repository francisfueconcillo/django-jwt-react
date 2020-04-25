# Django-JWT-React Boilerplate

Boilerplate for Django & ReactJS Authentication using JWT. Instead of separating ReactJS Frontend and Django Backend API, the 2 components are bundled together. The *index.html* is rendered by Django Templating system, while the rest of the application is loaded by ReactJS 

PROS:
- Get the best of both worlds of Django and ReactJS
- Use Django for Authentication 
- No CORS settings needed

CONS:
- No live reload on JS

## Technologies

### Backend
- Django 3
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Rest Framework - SimpleJWT](https://github.com/SimpleJWT/django-rest-framework-simplejwt)
- Pipenv

### Frontend
- ReactJS
- Babel
- Webpack

## Local Development Setup

### Frontend
- Install Frontend modules
```
$ npm i
```
- Build frontend app (need to build on each change in development)
```
$ npm run build
```
- NOTE: FE routes must end in "/"

### Backend
- Install pipenv globally
```
$ pip install pipenv
```
- Set pipenv and install dependencies
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
- Login as superuser in [Admin UI](http://localhost:8000/admin) and create regular users.
- Access frontend app at http://localhost:8000

## Deployment
- 

## References
- https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta
- Modified some codes especially on usage of Axios


