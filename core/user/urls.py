from django.urls import path
from . import views
urlpatterns = [
    path('sign-up/', views.register_view, name='register'),
    path('sign-in/', views.login_view, name='login'),
    path('sign-out/', views.logout_view, name='logout'),
    path('edit-profile', views.profile, name='profile')
]
