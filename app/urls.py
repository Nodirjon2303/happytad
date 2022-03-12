from django.urls import path
from .views import *

urlpatterns = [
    path('login/', loginView, name='login'),
    path('registration/', registerView, name='register'), 
    path('', homeView, name = 'home')
]