import React, { useState } from 'react'
import Header from './Mycomponents/Header'
import News from './Mycomponents/News'
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App =()=> {
  const pagesize = 12;
  const country = "us";
  const apiKey=process.env.REACT_APP_NEWS_API;

  const [Progress, setProgress] = useState(0)


    return (
      <Router>
        <LoadingBar
        color='#f11946'
        height={2.5}
        progress={Progress}
      /><LoadingBar/>
        <Header />
        <div>
          <Routes>
            <Route exact path="/"
              element={<News setProgress={setProgress} pagesize={pagesize} key="general" country={country} category="general" apiKey={apiKey} />}
            />
            <Route exact path="/Business"
              element={<News setProgress={setProgress} pagesize={pagesize} key="business" country={country} category="business" apiKey={apiKey} />}
            />
            <Route exact path="/Entertainment"
              element={<News setProgress={setProgress} pagesize={pagesize} key="entertainment" country={country} category="entertainment" apiKey={apiKey} />}
            />
            <Route exact path="/Health"
              element={<News setProgress={setProgress} pagesize={pagesize} key="health" country={country} category="health" apiKey={apiKey} />}
            />
            <Route exact path="/Science"
              element={<News setProgress={setProgress} pagesize={pagesize} key="science" country={country} category="science" apiKey={apiKey} />}
            />
            <Route exact path="/Sports"
              element={<News setProgress={setProgress} pagesize={pagesize} key="sports" country={country} category="sports" apiKey={apiKey} />}
            />
            <Route exact path="/Technology"
              element={<News setProgress={setProgress} pagesize={pagesize} key="technology" country={country} category="technology" apiKey={apiKey} />}
            />
          </Routes>
        </div>
      </Router>
    )
  }

export default App;
