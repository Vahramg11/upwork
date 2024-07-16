from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from customer.models import Customer

from .models import Job
from .serializers import JobSerializer


# Create your views here.
class JobsInfo(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    @action(method=["POST"], detail=False)
    def add_job(self, request, username):
        try:
            customer = get_object_or_404(Customer, username=username)
            new_job = Job.objects.create(**request.data)
            customer.jobs.add(new_job)
            return Response(data=JobSerializer(new_job).data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

