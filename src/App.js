import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './componenets/NewsCards/NewsCards';

const alankey = 'df562e911aa8dbb0be7a2623da090afa2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({ command, articles}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }

            }
        })
    },[])

    return (
    <div>
        <h1>AI News</h1>
        <NewsCards articles={newsArticles} />
    </div>
    );
}

export default App;