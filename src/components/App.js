import { HashRouter, Switch, Route } from 'react-router-dom'

import Demos from './Demos'
import Pages from './Pages'
import Support from './Support'
import Default from './Default'
import TermsAndConditions from './TermsAndConditions'
import PrivacyPolicy from './PrivacyPolicy'
import Wrapper from './Wrapper'


function App() {
    return (
        <HashRouter>
            <Wrapper>
                <Switch>
                    <Route exact path={'/'} component={Demos}/>
                    <Route exact path={'/pages'} component={Pages}/>
                    <Route exact path={'/support'} component={Support}/>
                    <Route exact path={'/pp'} component={PrivacyPolicy}/>
                    <Route exact path={'/tc'} component={TermsAndConditions}/>
                    <Route exact component={Default}/>
                </Switch>
            </Wrapper>
        </HashRouter>
    );
}

export default App;
