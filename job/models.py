from django.db import models

from freelancer.models import Skills



# Create your models here.
class Job(models.Model):
    CHOICE_TYPES = (
        ("0", "Start"),
        ("1", "Process"),
        ("2", "Done")
    )
    name = models.CharField(max_length=100)
    process = models.CharField(max_length=10, choices=CHOICE_TYPES, default="0")
    description = models.TextField(null=True, blank=True)
    experience = models.IntegerField(default=0)
    skills = models.ManyToManyField(Skills, related_name="jobs", null=True, blank=True)
    customer = models.ForeignKey("customer.Customer", on_delete=models.CASCADE, related_name="jobs", null=True, blank=True)


    def __str__(self):
        return f" {self.id} {self.name} {self.process}"
