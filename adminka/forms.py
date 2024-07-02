from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import Adminka
from forauth.forms import MyUserForm


class AdminkaForm(UserCreationForm):
    class Meta(MyUserForm.Meta):
        model = Adminka
