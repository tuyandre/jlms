<a class="btn btn-xs mb-1 mr-1 btn-success text-white" style="cursor:pointer;"
   onclick="$(this).find('form').submit();">
    Accept
    <form action="{{$route}}"
          method="POST" name="complete" style="display:none">
        @csrf
    </form>
</a>