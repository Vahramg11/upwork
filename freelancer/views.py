from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from .models import Freelancer
from .serializers import FreelancerSerializer


# Create your views here.
class FreelancerStaff(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    @action(methods=["GET"], detail=False)
    def get_freelancers(self, request):
        all_freelancers = Freelancer.objects.all()
        data_serial = FreelancerSerializer(instance=all_freelancers, many=True)
        print(data_serial.data)
        return Response(data=data_serial.data)

    @action(methods=["GET"], detail=True)
    def get_one_freelancer(self, request, pk):
        # one_freelancer = Freelancer.objects.get(id=pk)
        # data_serial = FreelancerSerializer(instance=one_freelancer)
        # print(data_serial.data)
        return Response("data_serial.data", status=status.HTTP_200_OK)
