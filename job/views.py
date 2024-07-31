from django.db.models import OuterRef, Exists
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from customer.models import Customer

from .models import Job
from .serializers import JobSerializer, AllJobsSerializer

from freelancer.models import Skills
from freelancer.serializers import SkillsSerializer
from .filters import JobFilter




# Create your views here.
class JobsInfo(viewsets.ViewSet):
    # permission_classes = [IsAuthenticated]

    @action(method=["POST"], detail=True)
    def add_job(self, request, username):
        try:
            print(request.data)
            customer = get_object_or_404(Customer, username=username)
            skills = request.data.pop("skills", [])
            new_job = Job.objects.create(**request.data)
            get_skills = Skills.objects.filter(id__in=skills)
            new_job.skills.set(get_skills)
            customer.jobs.add(new_job)
            data = JobSerializer(new_job)
            return Response(data=data.data, status=status.HTTP_200_OK)
        except Exception as err:
            print(err)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(method=["GET"], detail=False)
    def get_all_jobs(self, request):
        print("GETtttt", request.GET)
        jobs = JobFilter(request.GET, Job.objects.all()).qs
        serial = AllJobsSerializer(jobs, many=True)
        return Response(serial.data, status=status.HTTP_200_OK)

    @action(methods=["PATCH"], detail=True)
    def change_freelancer_job_status(self, request, pk):
        print(request.data)
        job = get_object_or_404(Job, pk=pk)
        status_type = request.data.get("status")
        if status is None:
            return Response({"detail": "Status is required."}, status=status.HTTP_400_BAD_REQUEST)
        job.process = status_type
        job.save()
        return Response("JobSerializer(job).data", status=status.HTTP_200_OK)

    @action(methods=["GET"], detail=False)
    def get_all_skills(self, request):

        skills = Skills.objects.annotate(
            have_skill=Exists(Job.objects.filter(
                skills=OuterRef('pk')
            )
            )
        )
        serial = SkillsSerializer(skills, many=True)
        return Response(serial.data, status=status.HTTP_200_OK)
