from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .forms import MyUserForm
from .models import MyUser
from adminka.serializers import AdminSerializer
from customer.serializers import CustomerSerializer
from freelancer.serializers import FreelancerSerializer

from freelancer.forms import FreelancerForm

from adminka.forms import AdminkaForm
from customer.forms import CustomerForm


# Create your views here.
class Registration(viewsets.ViewSet):

    @staticmethod
    def chooseForm(user_type):
        if user_type=="C":
            return CustomerForm
        elif user_type=="F":
            return FreelancerForm
        elif user_type=="A":
            return AdminkaForm
        else:
            return ValueError("Wrong user type !!!")

    @action(method=["POST"], detail=False)
    def sign_up(self, request):
        print(request.data.get("user_type"))
        formForm = Registration.chooseForm(request.data.get("user_type"))
        form = formForm(data=request.data)
        if form.is_valid():
            form.save()
            return Response(status=status.HTTP_200_OK)
        print(form.errors)
        return Response(data=form.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(method=["POST"], detail=False)
    def log_out(self, request):
        try:
            refresh_token = request.data.get('refresh')
            print(refresh_token)
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data=e, status=status.HTTP_400_BAD_REQUEST)

    @action(method=["GET"], detail=False)
    @permission_classes([IsAuthenticated])
    def get_user(self, request):
        try:
            current_user_id = request.user.id
            current = get_object_or_404(MyUser, id=current_user_id)
            SerializerClass = Registration.check_user_type(current.user_type)
            my_user = SerializerClass(instance=current)
            return Response(my_user.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def check_user_type(user_type):
        if user_type=="F":
            return FreelancerSerializer
        elif user_type=="C":
            return CustomerSerializer
        elif user_type=="A":
            return AdminSerializer
        else:
            return ValueError("Wrong user_type!!!")
    # {
    # "username":"nn",
    # "first_name":"nn",
    # "last_name":"nn",
    # "email":"nn@gmail.com",
    # "password1":"nn1234nn",
    # "password2":"nn1234nn",
    # "role":"student"
    # }
