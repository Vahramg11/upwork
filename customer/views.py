from django.db.models import Prefetch
from django.shortcuts import render, get_object_or_404
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from customer.models import Customer
from job.models import Job

from customer.serializers import CustomerDetails

from customer.serializers import CustomerSerializer

from .serializers import ChangeCustomerInfo


# Create your views here.

class CustomerStaff(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    @action(methods=["GET"], detail=False)
    def get_customers(self, request):
        all_customers = Customer.objects.all()
        data_serial = CustomerSerializer(instance=all_customers, many=True)
        return Response(data=data_serial.data, status=status.HTTP_200_OK)

    @action(methods=["GET"], detail=True)
    def get_one_customer(self, request, username):
        print(username)
        one_customer = Customer.objects.prefetch_related(
            Prefetch('jobs', queryset=Job.objects.all()),
        ).get(username=username)
        data_serial = CustomerDetails(instance=one_customer)
        print(one_customer)
        return Response(data_serial.data, status=status.HTTP_200_OK)

    @action(methods=["PATCH"], detail=True)
    def change_customer_info(self, request, pk):
        customer = get_object_or_404(Customer, id=pk)
        try:
            if request.data:
                check = ChangeCustomerInfo(customer, data=request.data)
                if check.is_valid():
                    new = check.save()
                    return Response(data=CustomerDetails(new).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)




