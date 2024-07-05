from django.db.models import Prefetch, OuterRef
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from .models import Freelancer
from .serializers import FreelancerSerializer, FreelancerDetails, ChangeFreelancerInfo
from job.models import Job


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
    def get_one_freelancer(self, request, username):
        one_freelancer = Freelancer.objects.prefetch_related(
            Prefetch('job', queryset=Job.objects.all()),
        ).get(username=username)
        data_serial = FreelancerDetails(instance=one_freelancer)
        print(data_serial.data)
        return Response(data_serial.data, status=status.HTTP_200_OK)

    @action(methods=["PATCH"], detail=True)
    def change_freelancer_info(self, request, pk):
        freelancer = get_object_or_404(Freelancer, id=pk)
        try:
            if request.data:
                check = ChangeFreelancerInfo(freelancer, data=request.data)
                if check.is_valid():
                    new = check.save()
                    return Response(data=FreelancerDetails(new).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
