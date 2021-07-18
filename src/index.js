import React from 'react';
import ReactDOM from 'react-dom';
import PasswordPage from './PasswordPage';


class App extends React.Component{
    
    render(){
        return(
                <PasswordPage
                    name="Christopher De Castro"
                    youtubeLink="https://www.youtube.com/channel/UCSLRhw9LLu6N8ow8u2kT5aQ"
                    instagramLink="https://www.instagram.com/chrisjdecastro/"
                    twitterLink="https://twitter.com/chrisjdecastro"
                    githubLink="https://github.com/ChrisJDecastro"
                />
        );
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));

