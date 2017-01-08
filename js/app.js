$( document ).ready( function() {

    // ACCORDION ICONS CHANGE --------------------------------
    var blocks = $( '.tab-content .collapse' );
    blocks.on( 'shown.bs.collapse', function () {
        $( this ).prev().find( '.fa' )
            .removeClass( 'fa-plus-circle' )
            .addClass( 'fa-minus-circle' );
    });

    blocks.on( 'hidden.bs.collapse', function () {
        $( this ).prev().find( '.fa' )
            .removeClass( 'fa-minus-circle' )
            .addClass( 'fa-plus-circle' );
    });
    // --------------------------------------------------------

    // TITLE HIGHLIGHT ----------------------------------------
    var captions = $( '.feature-two .flipper' );
    captions.hover(
        function () {
            $( this ).next( '.thumbnail__title' ).addClass( 'thumbnail__title--highlight' );
        },
        function () {
            $( this ).next( '.thumbnail__title' ).removeClass( 'thumbnail__title--highlight' );
        }
    );
    // ---------------------------------------------------------

    // FORM VALIDATION -----------------------------------------------
    var form = $( '#featureSixForm' );
    var formOptions = {
        feedback: {
            success: 'fa-check-circle',
            error: 'fa-times-circle'
        }
    };
    form.validator( formOptions );
    // ---------------------------------------------------------

    // SELECT STYLING ------------------------------------------
    var select = $( '#plan' );
    select.select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
    // ---------------------------------------------------------


    // ANIMATE PAGE WITH WOW.JS ---------------------------------
    var wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 200,
            mobile: false,
            live: true
        }
    );
    wow.init();
    // ---------------------------------------------------------

    // GOOGLE MAP ----------------------------------------------

    var brampton = document.querySelector( '#map' );
    var bramptonCoords = new google.maps.LatLng( -33.86455, 151.209 );
    var zoomValue = 12;
    var bramptonProperties = {
        center: bramptonCoords,
        zoom: zoomValue,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: true,
        verviewMapControl: true,
        overviewMapControlOptions: {
            opened: false
        }
    };
    var bramptonMap = new google.maps.Map( brampton, bramptonProperties );
    var bramptonMarker = new google.maps.Marker({
        position: bramptonCoords,
        map: bramptonMap,
        visible: true,
        animation: google.maps.Animation.DROP
    });
    var bramptonInfo = new google.maps.InfoWindow({
        content: 'Australia - the most beautiful country in the world!'
    });
    bramptonMarker.addListener( 'click', function () {
        bramptonInfo.open( bramptonMap, bramptonMarker );
    });
    // --------------------------------------------------------------------
    // MAKE GOOGLE MAP RESPONSIVE
    // --------------------------------------------------------------------
    var bramptonMapCenter = bramptonMap.getCenter(); // returns the position displayed at the center of the map
    // CENTER GOOGLE MAPS ON BROWSER RESIZE (RESPONSIVE)
    google.maps.event.addDomListener( window, 'resize', function () {
        bramptonMap.setCenter( bramptonMapCenter );
    });
    // -------------------------------------------------------------------
    // RETURN CENTER OF MAP TO THE CENTER OF WINDOW IF MAP WAS MOVED BY USER
    google.maps.event.addListener( bramptonMap, 'center_changed', function () {
        window.setTimeout( function () {
            bramptonMap.setCenter( bramptonMapCenter );
        }, 3000 );
    });
    // -------------------------------------------------------------------

});
