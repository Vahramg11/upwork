from django.urls import path

from .views import FreelancerStaff

urlpatterns = [

    path("freelancers/", FreelancerStaff.as_view({"get": "get_freelancers"})),
    path("freelancer/<int:pk>/", FreelancerStaff.as_view({"get": "get_one_freelancer"}))
]
