from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import AbstractUser
from shortuuid.django_fields import ShortUUIDField
from django.contrib.auth.models import Group, Permission , User

        
class ProfileEmployeur(models.Model):
    eid = ShortUUIDField(unique=True, max_length=255, length= 20 , primary_key=True , editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='')
    active = models.BooleanField(default=True)
    phone = models.CharField(max_length=50, default='')

    facebook_link =  models.URLField(max_length=250, blank=True, null=True, default='')
    instagram_link =  models.URLField(max_length=250, blank=True, null=True, default='')
    twetter_link =  models.URLField(max_length=250, blank=True, null=True, default='')
    youtube_link =  models.URLField(max_length=250, blank=True, null=True, default='')
    linkedin_link =  models.URLField(max_length=250, blank=True, null=True, default='')

    mail = models.EmailField(max_length=150, default='' , blank=True, null=True)
    phone = models.CharField(max_length=150, default='' , blank=True, null=True)
    whatsapp = models.CharField(max_length=150, default='' , blank=True, null=True)

    def __str__(self):
        return self.user.username 
