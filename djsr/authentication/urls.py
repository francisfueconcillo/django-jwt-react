from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import CustomUserCreate, HelloWorldView, ObtainTokenPairWithColorView, \
    LogoutAndBlacklistRefreshTokenForUserView

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
]