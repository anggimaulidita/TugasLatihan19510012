class List extends React.Component {
    render() {
    
        let daftarbuku = [
            {id: 1, judul: "7 in 1 Pemograman Web Untuk Pemula"},
            {id: 2, judul: "7 in 1 Pemograman Web Tngkat Lajut"},
            {id: 3, judul: "Mudah Membuat Aplikai Android dengan Ionic 3"}
        ];

        let daftarebook = [
            "Mengasai React JS untuk pemula",
            "Menguasai Vue JS untu pemula",
            "Menguasai React Native untuk pemula"
        ];

        return (
            <div>
                <h4>Daftar judul Buku</h4>
                <ol>
                    {daftarbuku.map((buku)=>
                    <li key={buku.id}>
                        {buku.judul}
                    </li>
                    )}
                </ol>

                <h4>Daftar Judul Ebook</h4>
                <ol>
                    {daftarebook.map((ebook, index)=>
                    <li key={index}>
                        {ebook}
                        </li>
                        )}
                </ol>
            </div>
        );
        }
    }
    ReactDOM.render(<list/>, document.getElementById('root'));