var getImages = () => {
    var folder = "img/happyClients/";

    $.ajax({
        url: folder,
        success: function (data) {
            let index = 0;
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".happyClientImages").append(
                        `<a href='${val}'>
                        <img class='d-block w-100' src='${val}'>
                        </a>`
                    );
                    index++;
                }
            });

            $(".happyClientImages").justifiedGallery({
                rowHeight: 370,
                lastRow: 'nojustify',
                margins: 3
            });
        }
    })
};