$(document).ready(function() {
    
    $('.toggle').parent().parent().find('li .inner').slideUp(0);
	
$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {

        $this.next().removeClass('show');
        $this.next().slideUp(350);
		$('.plus').text("\u002B");
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
		$this.children().text("\u2212");
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
}); 



    $("#newFolderConfirm").click(function() {
        console.log("New Folder");
        //yyyy.MM.dd HH:mm

        var folder = {
            "name": $("#newFolderInput").val(),
            "color": "#fff",
            "path": "/",
            "owner": profile.getEmail(),
        }

        $.ajax({
            type: 'POST',
            url: "/conf/storage/insertfolder",
            data: JSON.stringify(folder),
            error: function(e) {
                console.log(e);
            },
            dataType: "json",
            contentType: "application/json"
        });
        $("#newFolderInput").val("");
    });

   if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(function() {
            $('.card').draggable({ revert: true });
            $('.toggle').droppable({
               hoverClass: 'active',
               drop: function(e, ui) {
				   $('#myMovingModal').modal('toggle');
                  $(this).html(ui.draggable.remove().html());
                  $(this).droppable('destroy');
                  $( this )
                  .addClass( "ui-state-highlight" )
                  .find( "p" )
                  .html( "i'm destroyed!" );
               }
            });
         });

});