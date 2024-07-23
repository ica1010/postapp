from typing import Any
from urllib import request
from django.db import models
from django.core.exceptions import ValidationError
from shortuuid.django_fields import ShortUUIDField
import timeago, datetime
from user.models import ProfileEmployeur
from django.utils.timesince import timesince
from django.utils import timezone
from taggit.managers import TaggableManager
import requests
# Create your models here.
now = datetime.datetime.now() + datetime.timedelta(seconds = 60 * 3.4)
class Category(models.Model):
    cid = ShortUUIDField(unique=True, length=6,max_length=255, alphabet='1234567890' , editable=False,  prefix='cat-')
    title = models.CharField(max_length=50)
    image = models.ImageField(max_length=250, default='default.jpg')

    add_date = models.DateTimeField(auto_now=False, auto_now_add=True)
    def __str__(self):
        return self.title

# class Experience(models.Model):
#     title = models.CharField(max_length=50)
#     active = models.BooleanField(default=True)

#     def __str__(self):
#         return self.title
# class ConpetenceTaggedItem(TaggedItemBase):
#     content_object = models.ForeignKey('Job', on_delete=models.CASCADE)

class Post(models.Model):
    jid = ShortUUIDField(unique=True, length=6 ,max_length=255, alphabet='1234567890' , editable=False,  prefix='event-')
    title = models.CharField(max_length=50)
    image = models.ImageField(max_length=250, default='default.jpg')
    category = models.ForeignKey(Category,on_delete=models.CASCADE, default='', related_name='category')
    author = models.ForeignKey(ProfileEmployeur,on_delete=models.CASCADE,related_name='author')
    description = models.TextField()
    tag = TaggableManager()
    
    publication_date = models.DateTimeField(auto_now=False, auto_now_add=True)
    active = models.BooleanField(default=True)

    def timeago(self):
        if timezone.is_naive(self.publication_date):
            publication_date = timezone.make_aware(self.publication_date, timezone.get_current_timezone())
        else:
            publication_date = self.publication_date

        now = timezone.now()
        return timesince(publication_date, now)

    def __str__(self):
        return self.title
