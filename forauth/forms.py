from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from django import forms
from .models import MyUser


class MyUserForm(UserCreationForm):
    class Meta:
        model = MyUser
        fields = ('username', 'password1', 'password2', 'user_type', 'email', "first_name", "last_name")
