from datetime import datetime
from django.http import HttpResponse
from django.shortcuts import redirect, render
import requests
from user.models import ProfileEmployeur
from post.models import Category, Post
from django.contrib.auth.decorators import login_required
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank
from django.contrib import messages
from taggit.models import Tag
# from visits.models import Visits
# Create your views here.
def homePage(request):
    category = Category.objects.all()
    post = Post.objects.all()

    context = {
        'post':post,
        'category':category,
    }

    return render(request, 'index.html',context)

def jobPage(request):
    category = Category.objects.all()
    post = Post.objects.all()

    context = {
        'post':post,
        'category':category,
    }
    return render(request, 'job.html',context)

def jobSearch(request):
    post_title = request.GET['title']
    locality = request.GET['location']
    post = post.objects.filter(title__icontains = post_title)

    context = {
        'post':post,
        'post_title':post_title,
        'locality':locality,
    }
    return render(request, 'jobSearchPage.html', context)

def categoryPage(request):
    category = Category.objects.all()

    context = {
        'category':category,
    }
    return render(request, 'category.html',context)

def categoryJobPage(request, cid):
    cat = Category.objects.get(cid = cid)
    post = Post.objects.filter(category=cat)

    context = {
        'post':post,
        'cat':cat
    }
    return render(request, 'category-job.html', context)


def jobDetail(request, jid):
    post = Post.objects.get(jid=jid)
    cat = Category.objects.all()

    context = {
        'post':post,
        'cat':cat
    }
    return render(request, 'job-detail.html', context)

def contactUs(request):
    return render(request, 'contact.html')


@login_required(login_url='/auth/sign-in/')
def adminJobList(request):
    post = Post.objects.filter(author=ProfileEmployeur.objects.get(user=request.user))

    context={
        'post':post
    }
    return render(request, 'adminJobList.html', context)


@login_required(login_url='/auth/sign-in/')
def addjob(request):

    url = request.META.get('HTTP_REFERER')
    cat = Category.objects.all()
    if request.method == 'POST' :
        job_title = request.POST['title']
        category = request.POST['category']
        description = request.POST['description']
      
        tags_l = request.POST.getlist('tags')

        image = request.Files['image']
        
  
        category_inst = Category.objects.get(title = category)
        

        new_job = Post.objects.create(
            author = ProfileEmployeur.objects.get(user=request.user),
            title = job_title,
            image = image,
            category = category_inst,
            description = description,

        )
    

        if tags_l:
            for tag in tags_l:
               new_job.tag.add(tag)
             
    context = {
        'cat':cat,
    }
    return render(request, 'addjobalert.html', context)



def editPost(request,jid):

    url = request.META.get('HTTP_REFERER')
    new_job = Post.objects.get(jid =jid)

    cat = Category.objects.all()
    if request.method == 'POST' :
        job_title = request.POST['title']
        category = request.POST['category']
        description = request.POST['description']
      
        tags_l = request.POST.getlist('tags')

        image = request.POST['image']
        
  
        category_inst = Category.objects.get(title = category)
        

        new_job.title = job_title
        new_job.image = image
        new_job.category = category_inst
        new_job.description = description

        new_job.save()

        if tags_l:
            for tag in tags_l:
               new_job.tag.add(tag)
             
    context = {
        'cat':cat,
        'post':new_job
    }
    return render(request, 'editpost.html', context)

