/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.editorConfig = function( config ) {
	
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about', 'accordionList' ] }
	];
	
	config.extraPlugins =  'accordionList,abbr,uploadimage,uploadwidget,widget,lineutils,clipboard,widgetselection,dialog,dialogui,filebrowser,popup,filetools,notification';
//	config.extraPlugins =  'abbr';
//	config.allowedContent = true;
	config.height = 400;
	config.startupOutlineBlocks = true; 
	config.removeButtons = 'Form,Checkbox,Radio,TextField,Textarea,Select';
	//config.filebrowserBrowseUrl = 'http://localhost:60125/Post/Upload';
	config.filebrowserUploadMethod = 'form';
	config.filebrowserUploadUrl = 'http://localhost:60125/Post/UploadImage';
	config.allowedContent = true;
};