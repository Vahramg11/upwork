from django.contrib import admin
from django.urls import path

from .views import Registration


urlpatterns = [
    path("sign_up/", Registration.as_view({"post": "sign_up"})),
    path("log_out/", Registration.as_view({"post": "log_out"})),
    path("user/", Registration.as_view({"get": "get_user"})),
    path("professions/", Registration.as_view({"get": "get_professions"})),
]
