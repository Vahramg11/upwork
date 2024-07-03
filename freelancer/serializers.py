from rest_framework import serializers
from .models import Freelancer, Skills, Profession
from job.serializers import JobSerializer


class FreelancerSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Freelancer
        fields = ["id", "first_name", "last_name", "username", "email", "photo", "salary", "user_type", "summary"]

    def get_user_type(self, data):
        return data.get_user_type_display()


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ["id", "name"]


class FreelancerDetails(FreelancerSerializer):
    skills = SkillsSerializer(many=True)
    profession = serializers.SerializerMethodField()
    job = JobSerializer(many=True)

    class Meta(FreelancerSerializer.Meta):
        fields = FreelancerSerializer.Meta.fields + ["skills", "profession", "job"]

    def get_profession(self, obj):
        return obj.profession.name


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
