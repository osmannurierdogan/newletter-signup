/* const client = require('mailchimp-marketing');

client.setConfig({
	apiKey: 'YOUR_API_KEY',
	server: 'YOUR_SERVER_PREFIX',
});

const run = async () => {
	const response = await client.lists.createList({
		name: 'name',
		permission_reminder: 'permission_reminder',
		email_type_option: true,
		contact: {
			company: 'company',
			address1: 'address1',
			city: 'city',
			country: 'country',
		},
		campaign_defaults: {
			from_name: 'from_name',
			from_email: 'Beulah_Ryan@hotmail.com',
			subject: 'subject',
			language: 'language',
		},
	});
	console.log(response);
};

run();
 */


/* const checkStatusCode = (response) => {
		if (response.status === 200) {
			res.render('success', {
				firstName: firstName,
				lastName: lastName,
				email: email,
			});
		} else if (response.status === 401) {
			res.render('failure');
		}
	}
	checkStatusCode(mailchimpBatchListMembers()); */