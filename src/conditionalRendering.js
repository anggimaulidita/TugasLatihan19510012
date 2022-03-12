class Anak extends React.Component {
    render() {
        let $keterangan;
    if(this.props.umur >=17) $keterangan = "sudah dewasa";
    else $keterangan = "belum dewasa";

    let $kata =this.props.umur >=17 ? "sudah" : "masih";

    return (
        <h3>
            {this.props.nama} {$keterangan}, karena {$kata} berumur {this.props.umur}.

            {this.props.umur >=17 &&
            <span>Sudah boleh menggunakan sepeda motor</span>
            }
        </h3>
    );
    }
}
    ReactDOM.render(<Anak nama ="Anggi" umur ="17"/>, document.getElementById('root'));