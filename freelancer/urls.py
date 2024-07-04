from django.urls import path

from .views import FreelancerStaff

urlpatterns = [
    path("freelancers/", FreelancerStaff.as_view({"get": "get_freelancers"})),
    path("freelancer/<str:username>/", FreelancerStaff.as_view({"get": "get_one_freelancer"})),
    path("change_info/freelancer/<str:pk>/", FreelancerStaff.as_view({"patch": "change_freelancer_info"}))
]
