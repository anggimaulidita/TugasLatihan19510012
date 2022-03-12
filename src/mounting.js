class Hobi extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {hobi: "membaca"};
    }
    static getDerivedStateFromProps(props, state) {
        return {hobi: props.nama};
    }

    componentDidMount() {
        setTimeout(()=> {
            window.alert("Hobi " + this.state.hobi)
        },1000)
    }

    render() {
        return(
            <h1>Hobiku adalah {this.state.hobi}</h1>
        );
    }
}
ReactDOM.render(<Hobi nama="menulis"/>, document.getElementById('root'));
