from django.urls import path

from .views import GetInformation


urlpatterns = [
    path("delete/freelancer/<int:pk>/", GetInformation.as_view({"delete": "remove_freelancer"})),
    path("delete/customer/<int:pk>/", GetInformation.as_view({"delete": "remove_customer"})),
    path("professions/", GetInformation.as_view({"get": "get_professions"}))

]

