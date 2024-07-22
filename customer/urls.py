from django.urls import path

from .views import CustomerStaff

urlpatterns = [
    path("customers/", CustomerStaff.as_view({"get": "get_customers"})),
    path("customer/<str:username>/", CustomerStaff.as_view({"get": "get_one_customer"})),
    path("change_info/customer/<int:pk>/", CustomerStaff.as_view({"patch": "change_customer_info"})),
    path("change_image/customer/<int:pk>/", CustomerStaff.as_view({"patch": "change_customer_image"})),
]
