from rest_framework import serializers

from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = ["id", "first_name", "last_name", "username", "email", "photo", "phone", "user_type"]

    def get_user_type(self, data):
        return data.get_user_type_display()
