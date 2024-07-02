from django.db import models

from forauth.models import MyUser


# Create your models here.
class Adminka(MyUser):
    photo = models.FileField(null=True, blank=True)
    phone = models.CharField(max_length=50, null=True, blank=True)
    myuser_ptr = models.OneToOneField(MyUser, on_delete=models.CASCADE, parent_link=True, related_name='admin_profile')

    class Meta:
        verbose_name = 'Admin'
        verbose_name_plural = 'Admins'
