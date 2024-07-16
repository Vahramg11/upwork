from django.contrib.auth.forms import UserCreationForm

from .models import Freelancer
from forauth.forms import MyUserForm
from django import forms


class FreelancerForm(UserCreationForm):
    class Meta(MyUserForm.Meta):
        model = Freelancer
        fields = MyUserForm.Meta.fields+('profession',)
