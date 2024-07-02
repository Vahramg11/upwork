from django import forms
from django.contrib.auth.forms import UserCreationForm

from forauth.forms import MyUserForm

from .models import Customer


class CustomerForm(UserCreationForm):
    class Meta(MyUserForm.Meta):
        model = Customer
