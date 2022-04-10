

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
let PORT = process.env.PORT || 3000;

const listId = '5245f64ba9';
const serverPrefix = 'us14';
const apiKey = `197d5bebd4b80457ae833052723a378e-${serverPrefix}`;
const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}`;

const mailchimp = require('@mailchimp/mailchimp_marketing');
mailchimp.setConfig({
	apiKey: apiKey,
	server: serverPrefix,
});

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('signup');
});

app.post('/failure', (req, res) => {
	res.redirect('/');
});
app.post('/', (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;

	const data = {
		members: [
			{
				email_address: email,
				status: 'subscribed',
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			},
		],
	};
	//const jsonData = JSON.stringify(data);

	/* res.render('success', {
		firstName: firstName,
		lastName: lastName,
		email: email,
	}); */

	/* const options = {
		method: 'POST',
		auth: `osmannurierdogan:${apiKey}`,
	}; */
	/* const member = {
		name: 'Osman',
		permission_reminder: 'Founder',
		email_type_option: true,
		contact: {
			company: 'OSIZ',
			address1: 'Default Address',
			city: 'Istanbul',
			country: 'Turkey',
		},
		campaign_defaults: {
			from_name: 'Osman Nuri Erdogan',
			from_email: 'osmerd04@gmail.com',
			subject: 'Erasmus+ Internship',
			language: 'english',
		},
	}; */

	/* axios
		.post(url, options)
		.then((postResponse) => {
			console.log(postResponse);
		})
		.catch((error) => {
			console.log('e :>> ', error);
		}); */

	async function mailchimpBatchListMembers() {
		const response = await mailchimp.lists
			.batchListMembers(listId, data) // jsonData
			.catch((error) => {
				console.log('error :>> ', error);
			});
		//console.log('response :>> ', response);
		return response;
		//console.log(response);
	}
	// write a function that find the status code of the response and render the success or failure page depending on the status code

	mailchimpBatchListMembers().then((response) => {
		console.log('response :>> ', response);
		if (response.errors.length <= 0) {
			res.render('success', {
				firstName: firstName,
				lastName: lastName,
				email: email,
			});
		} else {
			res.render('failure');
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server is listening at ${PORT}`);
});
// Mailchimp API Key
// 197d5bebd4b80457ae833052723a378e-us14

// List ID
// 5245f64ba9
