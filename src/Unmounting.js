class Countainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {show:true};
    }

    hapusHalo = () => {
        this.SetState({show:false});
    }

    render(){
        let halo;
        if(this.state.show){
            halo = <Halo/>;
        }
        
        return (
            <div>
                {halo}
                <button onClick = {this.hapusHalo}>Hapus Halo</button>
            </div>
        );
    }
}

class Halo extends React.Component {
    ComponentWillUnmount (){
        window.alert("Component Halo akan dihapus");
    }

    render(){
        return <h1>Halo, gimana kabarnya bro? </h1>;
    }
}

ReactDOM.render(<Container/>, document.getElementById('root'));