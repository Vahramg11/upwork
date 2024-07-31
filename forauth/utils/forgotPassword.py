import datetime
import os
from email.mime.image import MIMEImage

from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.dispatch import receiver
from django_rest_passwordreset.signals import reset_password_token_created
from rest_framework.response import Response
from rest_framework import status


def send_reset_password_email(reset_password_token):
    print("barev aper")
    current_year = datetime.datetime.now().year

    html_content = render_to_string(
        'forgot_password.html',
        {
            'token': reset_password_token.key,
            "user": reset_password_token.user.username,
            "current_year": current_year,
            "id": reset_password_token.user.id
        }
    )

    email_message = EmailMultiAlternatives(
        subject="Reset password",
        body=html_content,
        from_email=os.getenv('EMAIL_HOST_USER'),
        to=[reset_password_token.user.email]
        
    )
    email_message.attach_alternative(html_content, 'text/html')

    image_path = os.path.join(settings.MEDIA_ROOT, 'images', 'email', 'email.jpeg')

    with open(image_path, 'rb') as img_file:
        image_data = img_file.read()
        image = MIMEImage(image_data, _subtype='jpeg')
        image.add_header('Content-ID', 'email_image')  # Use angle brackets around Content-ID
        email_message.attach(image)

    email_message.send(fail_silently=False)


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, **kwargs):
    send_reset_password_email(reset_password_token)


