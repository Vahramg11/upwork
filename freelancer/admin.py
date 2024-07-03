from django.contrib import admin
from .models import Freelancer, Skills, Profession

# Register your models here.
admin.site.register(Freelancer)
admin.site.register(Skills)
admin.site.register(Profession)