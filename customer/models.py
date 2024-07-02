from django.db import models
from forauth.models import MyUser


# Create your models here.
class Customer(MyUser):
    salary = models.IntegerField()
    photo = models.ImageField(upload_to="images/customers/", null=True, blank=True)
    phone = models.CharField(max_length=50, null=True, blank=True)
    myuser_ptr = models.OneToOneField(MyUser, on_delete=models.CASCADE, parent_link=True, related_name='customer_profile')
    class Meta:
        verbose_name = 'Customer'
        verbose_name_plural = 'Customers'
