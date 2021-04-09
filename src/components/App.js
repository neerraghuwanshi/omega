import { HashRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Demos from './Demos'
import Pages from './Pages'
import Support from './Support'
import Default from './Default'
import Wrapper from './Wrapper'


function App() {
    return (
      <HashRouter>
        <Wrapper>  
          <Navbar/>   
          <Switch>
            <Route exact path={'/'} component={Demos}/>
            <Route exact path={'/pages'} component={Pages}/>
            <Route exact path={'/support'} component={Support}/>
            <Route exact component={Default}/>
          </Switch>
        </Wrapper>
      </HashRouter>
    );
}

export default App;
