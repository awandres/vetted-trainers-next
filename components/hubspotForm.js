

class HubspotForm extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7981288',
          formId: '73c4f07c-52bb-4232-aae7-130e884f7595',
          target: '#hubspotForm'
        })
      }
    });
  }


	render() {
  	return (
  		<div>
  		  <div id="hubspotForm"></div>
  		</div>
    );
  }
}

export default HubspotForm
