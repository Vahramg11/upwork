from rest_framework import serializers

from .models import Customer
from job.serializers import JobSerializer


class CustomerSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = ["id", "first_name", "last_name", "username", "email", "photo", "user_type"]

    def get_user_type(self, data):
        return data.get_user_type_display()


class CustomerDetails(CustomerSerializer):
    jobs = JobSerializer(many=True)

    class Meta(CustomerSerializer.Meta):
        fields = CustomerSerializer.Meta.fields + ["jobs", "phone"]


class ChangeCustomerInfo(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['first_name', 'last_name', 'email', 'phone' 'summary']
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
            'email': {'required': False},
            'phone': {'required': False},
            'summary': {'required': False},
        }


