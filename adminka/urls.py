from django.urls import path

from .views import GetInformation


urlpatterns = [
    path("freelancers/", GetInformation.as_view({"get": "get_freelancers"})),
    path("customers/", GetInformation.as_view({"get": "get_customers"}))
]

