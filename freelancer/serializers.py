from rest_framework import serializers
from .models import Freelancer


class FreelancerSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()
    class Meta:
        model = Freelancer
        fields = ["id", "first_name", "last_name", "username", "email", "photo", "salary", "user_type"]
    def get_user_type(self, data):
        return data.get_user_type_display()
