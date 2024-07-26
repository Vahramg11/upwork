from django.contrib.auth.models import User
from django.db import models
from django.dispatch import receiver
from django_rest_passwordreset.signals import reset_password_token_created



# Create your models here.
class MyUser(User):
    user_type_choices = (
        ('F', 'freelancer'),
        ('C', 'customer'),
        ('A', 'admin'),
    )
    user_type = models.CharField(max_length=50, choices=user_type_choices, )



