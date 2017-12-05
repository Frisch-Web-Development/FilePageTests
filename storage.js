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

    
});