from django.contrib.auth.models import User
from rest_framework import serializers

from forauth.models import MyUser


class AdminSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = MyUser
        fields = ["username", 'id', "email", "user_type"]

    def get_user_type(self, data):
        return data.get_user_type_display()
