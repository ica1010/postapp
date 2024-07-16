from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import AbstractUser
from shortuuid.django_fields import ShortUUIDField
from django.contrib.auth.models import Group, Permission , User

        
class ProfileEmployeur(models.Model):
    eid = ShortUUIDField(unique=True, max_length=255, length= 20 , primary_key=True , editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='')
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.username 
