function add() {
    var currentValue = $("#result_no").val();
    var newValue = +currentValue + 20;
    $("#result_no").val(newValue);
}
function loadmore() {
    var val = document.getElementById("result_no").value;
    $.ajax({
        type: "post",
        url: "/fetchpost/",
        data: {
            getresult: val
        },
        success: function(response) {
			$("#loading").fadeOut(0);
            $("#comments").html(response);
        },
        error: function() {
            loadmore();
        }
    });
}

$(function(){
$(window).scroll(function() {
   if($(window).scrollTop() + window.innerHeight == $(document).height()) {
		$("#loading").fadeIn(0);
		add();
       loadmore()
   }
});
})

