class Halo extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {nama: "Anggi Maulidita Khusnurida"}

        this.tampilKota = this.tampilKota.bind(this);
    }

    tampilUmur = (umur) => {
        window.alert("Nama saya " + this.state.nama + "berumur" + umur + "tahun");
    }

    tampilKota(kota){
        window.alert("Nama saya "+this.state.nama+ "berasal dari" + kota);   
    }
    render(){
        return(
            <div>
                <button onClick={() => this.tampilUmur(20)}>Tampil Umur</button>
                <button onClick={this.tampilKota.bind(this,"Malang")}>Tampil Kota</button>
            </div>
        );
    }
}

    ReactDOM.render(<Halo/>, document.getElementById('root'));
