import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './login';
import Signup from './signup';
import Home from './home';
import Finally from './finally';
 function App() { 
  return (
    <>
<BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="finally" element={<Finally />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;