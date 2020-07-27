from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
# Create your views here.

def signup(request):
    if request.method == 'POST':
        
        username = request.POST.get('username','default')
        password1 = request.POST.get('password1','default')
        password2 = request.POST.get('password2','default1')
        email = request.POST.get('email','default@example.com')
        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Username already exists')
                return redirect('accounts:signup')
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'email already exists')
                return redirect('accounts:signup')
            else:
                user = User.objects.create_user(username=username,password=password1,email=email)
                user.save()
                user = auth.authenticate(username=username,password=password1)
                if user is not None:
                    auth.login(request, user)
                    return redirect("accounts:index") 
            
                
        else:
            messages.info(request,"password did not matched")
            return redirect('accounts:signup')
        return redirect('')
    else:
        return render(request, 'signup.html')

    

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request, user)
            return redirect("accounts:index") 
        else:
            messages.info(request,"invalid credentials")
            return redirect("accounts:signin")
    else:
        return render(request, 'signin.html')
    

def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request, user)
            return redirect("/") 
        else:
            messages.info(request,"invalid credentials")
            return redirect("login")
    else:
        return render(request, 'login.html')

def signout(request):
    auth.logout(request)
    return redirect('accounts:index')

def joinus(request):
    if request.method=="POST":
        redirect("accounts:index")

    return render(request, 'joinus.html')