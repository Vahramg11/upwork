from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class MyUser(User):
    user_type_choices = (
        ('F', 'freelancer'),
        ('C', 'customer'),
        ('A', 'admin'),

    )
    user_type = models.CharField(max_length=50, choices=user_type_choices,)
