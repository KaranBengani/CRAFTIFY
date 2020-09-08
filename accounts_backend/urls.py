from django.contrib import admin
from django.urls import path
from . import views
app_name = 'accounts'
urlpatterns = [
    
    path('',views.index,name="index"),
    path('signup',views.signup,name="signup"),
    path('signin',views.signin,name="signin"),
    path('joinus',views.joinus,name="joinus"),
    path('signout',views.signout,name="signout"),
    path('joinus',views.joinus,name="joinus")
    
]