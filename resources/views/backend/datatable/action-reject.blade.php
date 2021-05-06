<a class="btn btn-xs mb-1 mr-1 btn-warning text-white" style="cursor:pointer;"
   onclick="$(this).find('form').submit();">
    Reject
    <form action="{{$route}}"
          method="POST" name="complete" style="display:none">
        @csrf
    </form>
</a>