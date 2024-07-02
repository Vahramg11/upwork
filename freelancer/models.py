from django.db import models
from forauth.models import MyUser

class Skills(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.name}"
# Create your models here.
class Freelancer(MyUser):
    salary = models.IntegerField(null=True, blank=True)
    photo = models.ImageField(upload_to='images/freelancers/', default="images/defaultImage/freelancer.jpg", null=True, blank=True)
    myuser_ptr = models.OneToOneField(MyUser, on_delete=models.CASCADE, parent_link=True, related_name='freelancer_profile')
    skills = models.ManyToManyField(Skills)


    class Meta:
        verbose_name = 'Freelancer'
        verbose_name_plural = 'Freelancers'
