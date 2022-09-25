from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializer import *
import json
import requests

# Create your views here.


@api_view(['POST'])
def signUp(request):
    data = json.loads(request.body.decode('utf-8'))
    email = User.objects.filter(email=data['email'])
    if not email.exists():
        user = User.objects.create(username=data['username'], email=data['email'])
    else:
        user = email[0]
    return Response(userSerializer(user).data)

@api_view(['POST'])
def login(request):
    data = json.loads(request.body.decode('utf-8'))
    print(data)
    user = User.objects.filter(email=data['email'])
    print(user[0])
    if user.exists():
        user = user[0]
        print(user)
    else:
        user = None
        print('no')
    return Response(userSerializer(user).data)
