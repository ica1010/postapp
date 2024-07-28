from datetime import datetime
from itertools import count
from django.http import HttpResponse
from django.shortcuts import redirect, render
import requests
from user.models import ProfileEmployeur
from post.models import Category, Post
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank
from django.contrib import messages
from taggit.models import TaggedItem
from django.db.models import Count
from taggit.models import Tag


def homePage(request):
    category = Category.objects.all()
    post = Post.objects.all().order_by('-publication_date')

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
    return render(request, 'job.html', context)

def jobSearch(request):
    
    title =request.GET['title']
    post = Post.objects.all().filter(title__icontains = title)


    context = { 
        'post':post,
        'title':title
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
    related_post = Post.objects.filter(category = post.category).exclude(jid = jid)
    fam_tag = Tag.objects.annotate(count=Count('taggit_taggeditem_items')).order_by('-count')[:10]


    context = {
        'post':post,
        'cat':cat,
        'related_post':related_post,
        'fam_tag':fam_tag,
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

        image = request.FILES['image']
        
  
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
        messages.success(request, f'le post {new_job.title} a été crée avec succes')
        return redirect('AdminJobList')
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

        image = request.FILES.get('image')
        
  
        category_inst = Category.objects.get(title = category)
        

        new_job.title = job_title
        if image:
            new_job.image = image
        new_job.category = category_inst
        new_job.description = description

        new_job.save()

        if tags_l:
            new_job.tag.clear()
            for tag in tags_l:
               new_job.tag.add(tag)

        messages.success(request, f'le post {new_job.title} a été modifié avec succes')

        return redirect('AdminJobList')
             
    context = {
        'cat':cat,
        'post':new_job
    }
    

    return render(request, 'editpost.html', context)

def deletePost(request, jid):
    url = request.META.get('HTTP_REFERER')

    post = Post.objects.get(jid=jid)
    post.delete()
    messages.success(request, f'le post {post.title} a été supprimé avec succes')
    return redirect (url)