from django.urls import path
from . import views
urlpatterns = [
    path('', views.homePage, name='home'),
    path('events/', views.jobPage, name='job'),
################ categories urls ######################
    path('category/<cid>/', views.categoryJobPage, name='cat-job'),
    path('search/', views.jobSearch, name='job-search'),
    path('categories/', views.categoryPage, name='category'),
    path('event/<jid>/', views.jobDetail, name='job-detail'),
    path('contatct-us/', views.contactUs, name='contact'),
    path('my-events/', views.adminJobList, name='AdminJobList'),
    path('add-event/', views.addjob, name='addjob'),
    path('edit-event/<jid>', views.editPost, name='editPost'),
    path('dalete-event/<jid>', views.deletePost, name='deletePost'),
]
