

class GeneralTrainingForm extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7981288',
          formId: 'f43070a6-7ec0-450f-ad76-654b90b2ee92',
          target: '#generalTrainingForm'
        })
      }
    });
  }


	render() {
  	return (
  		<div>
  		  <div id="generalTrainingForm"></div>
  		</div>
    );
  }
}

export default GeneralTrainingForm
