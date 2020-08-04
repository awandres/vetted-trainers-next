



class InHomeTrainingForm extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7981288',
          formId: '116a619d-1a74-41ba-902f-979ceeeef73a',
          target: '#inHomeTrainingForm'
        })
      }
    });
  }


	render() {
  	return (
  		<div>
  		  <div id="inHomeTrainingForm"></div>
  		</div>
    );
  }
}

export default InHomeTrainingForm
