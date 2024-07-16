from django.urls import path

from .views import FreelancerStaff

urlpatterns = [
    path("freelancers/", FreelancerStaff.as_view({"get": "get_freelancers"})),
    path("freelancer/<str:username>/", FreelancerStaff.as_view({"get": "get_one_freelancer"})),
    path("change_info/freelancer/<int:pk>/", FreelancerStaff.as_view({"patch": "change_freelancer_info"})),
    path("add_skill/freelancer/<str:username>/", FreelancerStaff.as_view({"post": "add_skill"})),
    path("skills/<int:pk>/", FreelancerStaff.as_view({"get": "get_skills"})),
    path("skills/remove/<str:username>/<int:pk>/", FreelancerStaff.as_view({"delete": "remove_skill_from_freelancer"})),
]
