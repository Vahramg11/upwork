from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from freelancer.models import Freelancer

from freelancer.serializers import FreelancerSerializer

from customer.models import Customer

from customer.serializers import CustomerSerializer


# Create your views here.
class GetInformation(viewsets.ViewSet):
    permission_classes = [IsAdminUser, IsAuthenticated]

    # @action(methods=["GET"], detail=False)
    # def get_freelancers(self, request):
    #     all_freelancers = Freelancer.objects.all()
    #     data_serial = FreelancerSerializer(instance=all_freelancers, many=True)
    #     print(data_serial.data)
    #     return Response(data=data_serial.data, status=status.HTTP_200_OK)

    # @action(methods=["GET"], detail=False)
    # def get_customers(self, request):
    #     all_customers = Customer.objects.all()
    #     data_serial = CustomerSerializer(instance=all_customers, many=True)
    #     return Response(data=data_serial.data, status=status.HTTP_200_OK)

    @action(methods=["DELETE"], detail=True)
    def remove_freelancer(self, request,  pk):
        free = get_object_or_404(Freelancer, id=pk)
        free.delete()
        return Response(data="deleted", status=status.HTTP_200_OK)

    @action(methods=["DELETE"], detail=True)
    def remove_customer(self, request,  pk):
        custom = get_object_or_404(Customer, id=pk)
        custom.delete()
        return Response(data="deleted", status=status.HTTP_200_OK)

