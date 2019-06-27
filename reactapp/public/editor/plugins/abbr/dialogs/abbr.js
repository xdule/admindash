/**
CKEDITOR.dialog.add( 'customVideo', function( editor ) {
    return {
        title: 'Abbreviation Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Video',
                elements: [
                    {
                        type: 'text',
                        id: 'abbr',
                        label: 'Abbreviation',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." )
                    },
                    {
                        type: 'text',
                        id: 'title',
                        label: 'Explanation',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." )
                    }
                ]
            },
            {
                id: 'tab-adv',
                label: 'Listed video',
                elements: [
                    {
                        type: 'text',
                        id: 'id',
                        label: 'Id'
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;

            var abbr = editor.document.createElement( 'abbr' );
            abbr.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
            abbr.setText( dialog.getValueOf( 'tab-basic', 'abbr' ) );
			abbr='<div class="row"<div class="col-md-12"><h4>The Momentum Podcast</h4><iframe src="' +  abbr + '" width="600" height="440" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';

    //        var id = dialog.getValueOf( 'tab-adv', 'id' );
  //          if ( id )
 //               abbr.setAttribute( 'id', id );

            editor.insertElement( abbr );
        }
    };
});
**/


CKEDITOR.dialog.add( 'abbrDialog', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Add Elements',
		minWidth: 400,
		minHeight: 200,

		// Dialog window content definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Vimeo Video',

				// The tab content.
				elements: [
					{
						// Text input field for the abbreviation text.
						type: 'textarea',
						id: 'abbr',
						label: 'Vimeo Video ID',

						// Validation checking whether the field is not empty.
						/*validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." )*/
					},
					{
						// Text input field for the abbreviation title (explanation).
						type: 'textarea',
						id: 'title',
						label: 'Video Title',
						/*validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." )*/
					}
				]
			},

			// Definition of the Advanced Settings dialog tab (page).
			{
				id: 'tab-adv',
				label: 'Insert Button',
				elements: [
					{
						// Another text field for the abbr element id.
						type: 'text',
						id: 'linka',
						label: 'href='
					},
					{
						type: 'text',
						id: 'titl',
						label: 'Title:'
					}
				]
			},
			{
				id: 'tab-vid',
				label: 'Insert catalog video',
				elements: [
					{
						// Another text field for the abbr element id.
						type: 'text',
						id: 'catalogid',
						label: 'video id'
					},
					{
						type: 'text',
						id: 'catalogtitl',
						label: 'Title:'
					},
					{
						type: 'text',
						id: 'catalogduration',
						label: 'Duration:'
					},
					{
						type: 'text',
						id: 'catalogprice',
						label: 'Price:'
					}
					
				]
			}
		],

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.dialog
    var dialog = this;

           /* var abbr = editor.document.createElement( 'abbr' );
            abbr.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );*/
		
			var x = dialog.getValueOf( 'tab-basic', 'abbr' ) ;
			var y = dialog.getValueOf( 'tab-basic', 'title' ) ;
			var z= dialog.getValueOf( 'tab-adv', 'linka' ) ;
			var titl= dialog.getValueOf( 'tab-adv', 'titl' ) ;
			var catid=dialog.getValueOf( 'tab-vid', 'catalogid' );
			var cattitle=dialog.getValueOf( 'tab-vid', 'catalogtitl' );
			var catdur=dialog.getValueOf( 'tab-vid', 'catalogduration' );
			var catprice=dialog.getValueOf( 'tab-vid', 'catalogprice' );

			if(z.length>0)
			{
				
				editor.insertHtml('<a href="'+z+'" target="_blank" onclick="stopEventPropogation(event)" type="button" class="btn btn-primary">'+titl+'</a>');
			}else if(y.length>0)
			{
				editor.insertHtml("<div class='row'><div class='col-md-12'><h4>" +y+"</h4><iframe src='" + x + "' width='600' height='440' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>");
				//editor.insertHtml('<div class="vimeo-video" href="'+y+'" src="'+x+'"></div>');
				/*
				<div class="col-sm-6 col-md-4 product-container-grid">
					<article class="product-details">
						<a class="video-item" href="" data-id="0" video-id="328685340" video-title="Leadstreet Zip Codes">
							<div class="product-thumb-wrap"><img src="https://i.vimeocdn.com/video/773281815_295x166.jpg?r=pad" class="product-thumb video-thumb" alt="">
							</div>
							<div class="product-title-wrap">
							<span class="product-title">Leadstreet Zip Codes</span><span class="product-points" score-video-id="328685340" style="display:none;">30</span>
							<div class="product-rating-container">
								<div class="product-rating" id="rating_328685340" data-rate-value="4">
								</div></div></div><div class="clear-both border-top">
								<span class="product-price"><strong>Price:</strong>&nbsp;Free</span>
								<span class="product-duration"><strong>Duration:</strong>&nbsp;05:29</span>
							</div>
						</a>
					</article>
				</div>
				*/
				
				
			}
			else if(catid.length>0 && cattitle.length>0)
			{
				
				editor.insertHtml('<div class="col-sm-6 col-md-4 product-container-grid"><article class="product-details"><a class="video-item" href="" data-id="0" video-id="'+catid+'" video-title="'+cattitle+'"><div class="product-thumb-wrap"><img src="https://i.vimeocdn.com/video/773281815_295x166.jpg?r=pad" class="product-thumb video-thumb" alt=""></div><div class="product-title-wrap"><span class="product-title">'+cattitle+'</span><span class="product-points" score-video-id="'+catid+'" style="display:none;">30</span><div class="product-rating-container"><div class="product-rating" id="rating_328685340" data-rate-value="4"></div></div></div><div class="clear-both border-top"><span class="product-price"><strong>Price:</strong>&nbsp;Free</span><span class="product-duration"><strong>Duration:</strong>&nbsp;'+catdur+' </span></div></a></article></div>');
				
			}
		}
	};
});

