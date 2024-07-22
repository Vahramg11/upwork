import importlib

from rest_framework import serializers
from .models import Freelancer, Skills, Profession


# from job.serializers import JobSerializer


class FreelancerSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Freelancer
        fields = ["id", "first_name", "last_name", "username", "email", "photo", "user_type"]

    def get_user_type(self, data):
        return data.get_user_type_display()


class SkillsSerializer(serializers.ModelSerializer):
    have_skill = serializers.BooleanField(required=False)

    class Meta:
        model = Skills
        fields = ["id", "name", "have_skill"]


class AddSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ["id"]


class FreelancerDetails(FreelancerSerializer):
    skills = SkillsSerializer(many=True)
    profession = serializers.SerializerMethodField(allow_null=True)
    jobs = serializers.SerializerMethodField()

    class Meta(FreelancerSerializer.Meta):
        fields = FreelancerSerializer.Meta.fields + ["skills", "profession", "jobs", "salary", "summary"]

    def get_jobs(self, obj):
        JobSerializer = importlib.import_module('.serializers', package='job').JobSerializer
        jobs_queryset = obj.job.all()
        serializer = JobSerializer(jobs_queryset, many=True, context=self.context)
        return serializer.data

    def get_profession(self, obj):
        print(obj.profession)
        return obj.profession.name if obj.profession else None




class ChangeFreelancerInfo(serializers.ModelSerializer):
    class Meta:
        model = Freelancer
        fields = ['first_name', 'last_name', 'email', 'salary', 'summary']
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
            'email': {'required': False},
            'salary': {'required': False},
            'summary': {'required': False},
        }


class ProfessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profession
        fields = ["id", "name"]
