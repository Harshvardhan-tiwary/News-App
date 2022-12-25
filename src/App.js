import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './componenets/NewsCards/NewsCards';
import useStyles from './styles.js';

const alankey = 'df562e911aa8dbb0be7a2623da090afa2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({ command, articles}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }

            }
        })
    },[])

    return (
    <div>
        <div className={classes.logoContainer}>
            
        <img src="https://t4.ftcdn.net/jpg/01/66/52/39/240_F_166523930_XzLaIVUlXha2AB6JgRShWp2je0FBLnJi.jpg" className={classes.alanLogo} alt="News logo" />
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
    );
}

export default App;