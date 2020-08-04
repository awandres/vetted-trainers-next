

class PrivateGymTrainingForm extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7981288',
          formId: '22c8cc7c-57c9-48b4-a5a5-3853edddceb6',
          target: '#privateGymTrainingForm'
        })
      }
    });
  }


	render() {
  	return (
  		<div>
  		  <div id="privateGymTrainingForm"></div>
  		</div>
    );
  }
}

export default PrivateGymTrainingForm
