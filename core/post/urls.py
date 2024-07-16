from django.urls import path
from . import views
urlpatterns = [
    path('', views.homePage, name='home'),
    path('job/', views.jobPage, name='job'),
################ categories urls ######################
    path('category/<cid>/', views.categoryJobPage, name='cat-job'),
    path('search/', views.jobSearch, name='job-search'),
    path('categories/', views.categoryPage, name='category'),
    path('job/<jid>/', views.jobDetail, name='job-detail'),
    path('contatct-us/', views.contactUs, name='contact'),
    path('my-job-alert/', views.adminJobList, name='AdminJobList'),
    path('add-job-alert/', views.addjob, name='addjob'),
]
