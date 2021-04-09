import { HashRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Demos from './Demos'
import Pages from './Pages'
import Support from './Support'
import Default from './Default'
import Footer from './Footer'
import TermsAndConditions from './TermsAndConditions'
import PrivacyPolicy from './PrivacyPolicy'


function App() {
    return (
      <HashRouter>
          <Navbar/>   
          <Switch>
            <Route exact path={'/'} component={Demos}/>
            <Route exact path={'/pages'} component={Pages}/>
            <Route exact path={'/support'} component={Support}/>
            <Route exact path={'/pp'} component={PrivacyPolicy}/>
            <Route exact path={'/tc'} component={TermsAndConditions}/>
            <Route exact component={Default}/>
          </Switch>
          <Footer/>
      </HashRouter>
    );
}

export default App;
