document.ready(function () {
    const amenity = {};
    $("li input[type=checkbox]").on('change', function () {
        const amenityId = $(this).data('id');
        const amenityname = $(this).data('name');
        if ($(this).is(':checked')) {
            amenity[amenityId] = amenityname;
        } else {
            delete amenity[amenityId];
        }
        $('.amenities h4').text(Object.values(amenity).sort().join(', '));
    });
});
