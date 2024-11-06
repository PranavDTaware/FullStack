from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
     return HttpResponse("Welcome")
    # return render(request, 'HelloApp/templates/home.html')

def about(request):
     return HttpResponse("Transflower Learning Pvt. Ltd.")

def contact(request):
     return HttpResponse("call us : 5464651658")