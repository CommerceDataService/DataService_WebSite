
$.ajax({
   type: 'GET',
   url: 'cds_team_responses.json',
   dataType: 'json',
   success: function( data ) {
      

      //This is the initial thumbnail view build
      var thumbnailSource = $('#thumbnailTemplate').html();
      var thumbnailTemplate = Handlebars.compile(thumbnailSource);
      var thumbnailHTML = thumbnailTemplate(data);
      $('#Container').append(thumbnailHTML);

      //This is the initial modal build
      var modalSource = $('#modalTemplate').html();
      var modalTemplate = Handlebars.compile(modalSource);
      var modalHTML = modalTemplate(data);
      $('#teamModals').append(modalHTML);

      // Initializes MixItUp functionality after the AJAX call is successful
      // and after the Handlebars templates are built
      $('#Container').mixItUp({
         controls: {
            enable: false // we won't be needing these
         },
         callbacks: {
            onMixFail: function(state){
               console.log('this is failing');
            }
         }
      });
      
      // This sets up the scroll action so when people click profiles that are lower
      // their browser window changes to see the entire profile
      $('.touchModal').on('show.bs.modal', function(e) {
          var modal = $(this);
          var framei = document.getElementById("topOfBox");
          framei.scrollIntoView(true);
      });
   }
})

Handlebars.registerHelper('toLowerCase', function(options) {
    var newString = options.toLowerCase();
    return newString;
})

