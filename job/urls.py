from django.urls import path

from .views import JobsInfo

urlpatterns = [
    path('add_job/<str:username>/', JobsInfo.as_view({"post": "add_job"})),
]
