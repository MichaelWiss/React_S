var React = require('react');
var ReactDOM = ('react-dom');
require('./index.css');


class App extends React.Component {
	render () {
		return (
			<div>
			 Hello World!
			 </div>
	    )
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);