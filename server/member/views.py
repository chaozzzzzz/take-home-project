from rest_framework import generics, mixins
from core.models import Member
from member.serializer import MemberSerializer


# Create your views here.
class MemberGenericAPIView(generics.GenericAPIView,
                           mixins.RetrieveModelMixin,
                           mixins.ListModelMixin,
                           mixins.CreateModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def get(self, request, pk=None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        response = self.create(request)
        return response

    def put(self, request, pk=None):
        response = self.partial_update(request, pk)
        return response

    def delete(self, request, pk=None):
        response = self.destroy(request, pk)
        return response
