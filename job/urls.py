from django.urls import path

from .views import JobsInfo

urlpatterns = [
    path('', JobsInfo.as_view({"get": "get_jobs"})),
]
