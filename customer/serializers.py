import importlib

from rest_framework import serializers

from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = ["id", "first_name", "last_name", "username", "email", "photo", "user_type"]

    def get_user_type(self, data):
        return data.get_user_type_display()

class CustomerDetails(CustomerSerializer):
    jobs = serializers.SerializerMethodField()

    class Meta(CustomerSerializer.Meta):
        fields = CustomerSerializer.Meta.fields + ["jobs", "phone"]
    def get_jobs(self, obj):
        JobSerializer = importlib.import_module('.serializers', package='job').JobSerializer
        jobs_queryset = obj.jobs.all()
        serializer = JobSerializer(jobs_queryset, many=True, context=self.context)
        return serializer.data


class ChangeCustomerInfo(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['first_name', 'last_name', 'email', 'phone']
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
            'email': {'required': False},
            'phone': {'required': False},
            # 'summary': {'required': False},
        }


