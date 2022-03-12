class Hobi extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {hobi: "membaca"};
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeupdate(prevProps, prevState){
        window.alert("Hobi sebeumnya " + prevState.hobi);
        return true;
    }

    componentDiupdate() {
        setTimeout(() => {
        window.alert("Hobi sekarang " + this.state.hobi)
        }, 1000)
    }

    ubahHobi = () => {
        this.SetState({hobi: "melukis"});
    }

    render(){
        return(
            <div>
                <h1>Hobiku adalah {this.state.hobi}</h1>
                <button onclick={this.ubahHobi}>Ubah Hobi</button>
            </div>
            );
    }
    }

ReactDOM.render(<Hobi/>, document.getElementById('root'));