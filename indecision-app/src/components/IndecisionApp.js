import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randonNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randonNum];
        alert(option);
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {        
    }
    render () {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

export default IndecisionApp;