import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            list: [20, 13, 2, 11, 15, 21, 30, 40, 4, 1],
            checklen: 10,
            sorting: false,
            style: {
                backgroundColor: 'green'
            },
            l: 0
        };
    }

    handleClick = () => {
        if (this.state.sorting){
            return false
        }else{
            this.sort()
        }
    }

    sort = () => {
        this.setState({
            sorting: true
        })
        let l = this.state.l
        let storage = 0;
        let list = this.state.list;
        if (list[l] > list[l + 1]) {
            storage = list[l];
            list[l] = list[l + 1];
            list[l + 1] = storage;

            this.setState({
                list: list
            })
        }

        l++;
        this.setState({
            l: l
        })
        if(l >= this.state.checklen){
            this.setState({
                l: 0
            })
            this.setState({
                checklen: this.state.checklen - 1
            })
        }
        if(this.state.checklen <=0){
            alert("排序结束");

            this.setState({
                sorting: false
            })
        }else{
            setTimeout(this.sort, 100);
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            return <li key={value}
                                       style={{width: value * 9 + 'px', backgroundColor: 'green'}}>{value}</li>
                        })
                    }
                </ul>
                <button onClick={this.handleClick}>排序</button>
            </div>
        );
    }
}

export default App;