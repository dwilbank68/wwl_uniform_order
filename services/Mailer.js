const sendgrid = require('sendgrid');
// const sendgrid = require('@sendgrid/mail');
const helper = sendgrid.mail;
const keys = require('../config/keys.js');

class Mailer extends helper.Mail {
	
	constructor({subject, recipients}, content) {
        super();
        this.sgApi = sendgrid(keys.sendgridKey);
		this.from_email = new helper.Email('no-reply@email.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
	}
    
    addClickTracking = () => {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients = () => {
        const personalize = new helper.Personalization();
        this.recipients.forEach(r => personalize.addTo(r));
        this.addPersonalization(personalize);
    }

    send = async () => {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        const response = await this.sgApi.API(request);
        return response;
    }

	formatAddresses = recipients => {
		return recipients.map(({email}) => helper.Email(email)) 
	}
	
}

module.exports = Mailer;