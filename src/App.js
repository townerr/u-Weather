import React from 'react';
import Header from './components/Header/Header'
import AppBody from './components/Body/AppBody';
import Footer from './components/Footer/Footer';

function App() {
	const [data, setData] = React.useState();

  	//Display if valid zipcode
	if(data != null) {
   		return (
      		<div>
        		<Header data={data} setData={setData}/>
        		<AppBody data={data} setData={setData}/>
        		<Footer />
      		</div>
    	);
  	}
    else {
    	return (
      		<div>
        		<Header data={data} setData={setData}/>
        		<Footer />
      		</div>
    	);
  	}
}

export default App;
