from rest_framework import serializers

from .models import Job


class JobSerializer(serializers.ModelSerializer):
    process = serializers.SerializerMethodField()

    class Meta:
        model = Job
        fields = "__all__"

    def get_process(self, obj):
       return obj.get_process_display()
