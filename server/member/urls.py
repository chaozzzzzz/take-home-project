from django.urls import path
from member.views import MemberGenericAPIView

urlpatterns = [
    path('', MemberGenericAPIView.as_view()),
    path('<str:pk>', MemberGenericAPIView.as_view()),
]