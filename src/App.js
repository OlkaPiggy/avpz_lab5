import {Route, Routes} from 'react-router';

import {AppearancePage, FirstPage, IdentificationPage, LossPage, PlanPage, SourcePage} from './pages';
import {Layout} from './components';

import css from './App.module.css';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<FirstPage/>}/>
                <Route path={'source'} element={<SourcePage/>}/>
                <Route path={'identification'} element={<IdentificationPage/>}/>
                <Route path={'appearance'} element={<AppearancePage/>}/>
                <Route path={'loss'} element={<LossPage/>}/>
                <Route path={'planning'} element={<PlanPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;