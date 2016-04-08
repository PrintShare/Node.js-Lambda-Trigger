var AWS = require('aws-sdk');

console.log('Starting URL Signer');

exports.handler = function(event, context) {
    //console.log('Received event:', JSON.stringify(event, null, 2));

   var s3 = new AWS.S3();
	var params = {Bucket: 'BUCKETNAME', Key: event.name, ContentType: event.type};
	s3.getSignedUrl('putObject', params, function(err, url) {
		context.succeed({url: url});
	});
};