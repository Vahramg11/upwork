from rest_framework import serializers

from .models import Job
from freelancer.models import Skills

from customer.serializers import CustomerSerializer


# from customer.serializers import CustomerSerializer


class JobSerializer(serializers.ModelSerializer):
    process = serializers.SerializerMethodField()

    class Meta:
        model = Job
        fields = ("id", "name", "process")

    def get_process(self, obj):
        return obj.get_process_display()


class SkillSerial(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"


class AllJobsSerializer(serializers.ModelSerializer):
    process = serializers.SerializerMethodField()
    skills = SkillSerial(many=True)
    customer = CustomerSerializer()

    class Meta:
        model = Job
        fields = "__all__"
    def get_process(self, obj):
        return obj.get_process_display()
