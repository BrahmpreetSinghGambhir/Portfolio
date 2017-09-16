$(document).ready(function() {
    $(".blog-categories-right h2 span").on("click", function() {
        // if ($(".blog-categories-right").hasClass("open")) {
        //     $(this).parents(".blog-categories-right").removeClass("open");
        //     $(".blog-categories-right").children("ul, select").slideUp('slow');
        // };
        $(this).parents().siblings("ul, select").slideToggle('slow');
        $(this).toggleClass("toggleDown");
        // $(this).parents(".blog-categories-right").addClass("open");
    });

    if ($(window).width() < 768) {
        $(".latest-post-container .media").append($("#author-text"));
    };

    $(window).resize(function() {

        if ($(window).width() < 768) {
            $(".latest-post-container .media").append($("#author-text"));
        } else {
            $(".latest-post-container .media .media-body").append($("#author-text"));
        }

    });

});
