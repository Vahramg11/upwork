from django.db import models
from forauth.models import MyUser

# from job.models import Job


class Skills(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id} {self.name}"


def __str__(self):
    return f"{self.name}"


class Profession(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


# Create your models here.
class Freelancer(MyUser):
    salary = models.IntegerField(null=True, blank=True)
    photo = models.ImageField(upload_to='images/freelancers/', default="images/defaultImage/freelancer.jpg", null=True, blank=True)
    myuser_ptr = models.OneToOneField(MyUser, on_delete=models.CASCADE, parent_link=True, related_name='freelancer_profile')
    skills = models.ManyToManyField(Skills)
    profession = models.ForeignKey(Profession, on_delete=models.CASCADE, related_name="freelancers", null=True, blank=True)
    job = models.ManyToManyField("job.Job", related_name="freelancer")
    summary = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Freelancer'
        verbose_name_plural = 'Freelancers'

    def __str__(self):
        return f"{self.id} {self.username}"
