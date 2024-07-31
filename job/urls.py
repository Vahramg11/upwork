from django.urls import path

from .views import JobsInfo

urlpatterns = [
    path('add_job/<str:username>/', JobsInfo.as_view({"post": "add_job"})),
    path('all_jobs/', JobsInfo.as_view({"get": "get_all_jobs"})),
    path('change_job_status/<int:pk>/', JobsInfo.as_view({"patch": "change_freelancer_job_status"})),
    path("all_skills/", JobsInfo.as_view({"get": 'get_all_skills'}))
]
