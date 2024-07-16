from django.db import models


# Create your models here.
class Job(models.Model):
    CHOICE_TYPES = (
        ("0", "Start"),
        ("1", "Process"),
        ("2", "Done")
    )
    name = models.CharField(max_length=100)
    process = models.CharField(max_length=10, choices=CHOICE_TYPES, default="0")

    def __str__(self):
        return f" {self.id} {self.name} {self.process}"
