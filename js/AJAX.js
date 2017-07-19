function ajax(url,datas,id,obj){
    $.ajax({
        url:url,
        data:datas,
        dataType:'json',
        type:'get',
        success:function(data){
            console.log(data);
            var html=template(id,data);
            $(obj).html(html);
        }
    })
}