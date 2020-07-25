from django.shortcuts import render,redirect
from django.contrib.auth.models import User, auth
# Create your views here.
def register(request):
    if request.method == 'POST':
       
       
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if password1 == password2:
            if User.objects.filter(email=email).exists():
                print('email already taken')
            else:
                user = User.objects.create_user(password=password1,email=email)
                user.save()
                print("user created")
        else:
            print("Password didn't matched")
        return redirect('/')
    return render(request, 'register.html')