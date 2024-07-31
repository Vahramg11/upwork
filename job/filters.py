import django_filters

from .models import Job


class JobFilter(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')

    experience__gt = django_filters.NumberFilter(field_name='experience', lookup_expr='gt')
    experience__lt = django_filters.NumberFilter(field_name='experience', lookup_expr='lt')

    skill_name = django_filters.CharFilter(field_name='skills__name', lookup_expr='icontains')

    class Meta:
        model = Job
        fields = ['price', 'experience', 'skill_name']