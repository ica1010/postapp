from pyexpat.errors import messages
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate , login , logout
from django.contrib import messages
from django.contrib.auth.models import User
from user.models import ProfileEmployeur
from django.contrib.auth import authenticate, login as auth_login


# Create your views here.

def register_view(request):
    url = request.META.get('HTTP_REFERER')

    if request.user.is_authenticated:
        messages.warning(request, 'You are already logged in.')
        return redirect('home')
    
    elif request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        
        if User.objects.filter(email=email).exists():
            messages.error(request, 'Email is already in use.')
        else:
            try:
                user = User.objects.create_user(username=email, email=email, password=password)
                messages.success(request, 'Account created successfully!')
                user.is_staff = True
                user.is_superuser = True
                user.save()

                ProfileEmployeur.objects.create(user=user)
                login(request, user)
                return redirect('home')
            except Exception as e :
                messages.error(request, f'Erreur :{e}')
                return url


    return render (request, 'auth/signup.html')    

def login_view(request):
    # Redirige l'utilisateur vers la page d'accueil s'il est déjà connecté
    if request.user.is_authenticated:
        messages.warning(request, 'You are already logged in.')
        return redirect('homePage')

    # Traite le formulaire de connexion lorsque la méthode est POST
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Vérifie que le formulaire contient les deux champs nécessaires
        if not username or not password:
            messages.error(request, 'Username and password are required.')
            return render(request, 'auth/login.html')

        # Authentifie l'utilisateur
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            auth_login(request, user)
            messages.success(request, 'Login successfully!')
            return redirect('home')  # Redirige vers la page d'accueil après une connexion réussie
        else:
            messages.error(request, 'Invalid username or password.')
    
    # Affiche le formulaire de connexion si la méthode est GET ou s'il y a des erreurs
    return render(request, 'auth/login.html')
def logout_view(request):
    logout(request)
    messages.success(request, 'you are now logged out ')
    return redirect('home')  