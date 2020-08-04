



class JoinOurTeamForm extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7981288',
          formId: '6cd0b315-af94-4aea-a358-484ac17a3a68',
          target: '#joinOurTeamForm'
        })
      }
    });
  }


	render() {
  	return (
  		<div>
  		  <div id="joinOurTeamForm"></div>
  		</div>
    );
  }
}

export default JoinOurTeamForm
