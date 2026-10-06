import { AllatkertKategoriak } from "../data/allatkertData";
import { AllatAdatok } from "../data/allatkertData";
import "bootstrap/dist/css/bootstrap.min.css"

export const FejlecKomponens = () => {
  return <>
  <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <div className="mt-2 mb-1 p-5 bg-success text-white rounded">
            <h1 id="focim">🐾 Állatkert lakói</h1>

            <p className="mb-0">Téma: Állatok az állatkertben</p>
          </div>
        </div>
      </div></>
}
export const LablecKomponens = () => {
  return <>
  <div>
  <small><b>Az oldalt készítette:</b> Molnár Tamás</small>
  <small><b>Készítés dátuma:</b> {MaiDatum()}</small>
  </div>
  </>
}
const MaiDatum = () => {
  const d = new Date()
  return d.toString()
}



export function Allatkert(){
    return (

        <div className="row mb-2">
            {AllatkertKategoriak.map(item =>
                <div className="col-sm-4 kartya">
                    <h2>{item.cim}</h2>
                    <ul className="list-group">
                        {item.adatok.map(i => <li className="list-group-item">
                            {i}
                        </li>)}
                    </ul>
                </div>
            )}
        </div>  
    )
}

export function AllatokTablazat() {
    return(
        <div className="row mb-1">
            <div className="col-sm-12 mb-3">
            <h2>Az állatkert néhány lakója</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Életkor</th>
                        <th>Súly</th>
                        <th>Veszélyeztetett?</th>
                        <th>Kedvenc ételek</th>
                    </tr>
                </thead>
                <tbody>
                    {AllatAdatok.map(item =>
                        <tr>
                            <td>{item.nev}</td>
                            <td>{item.kor}</td>
                            <td>{item.suly}</td>
                            <td>{item.veszelyeztetett?"Igen":"Nem"}</td>
                            <td>{item.kedvenc_etel.join(", ")}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export function AllatokKartyak() {
    return (

        <div className="row mb-1">
            {AllatAdatok.map(item => 
                    
            <div className="col-sm-3 col-md-6 col-lg-3 mb-3 h-100">
                <h2>{item.faj}</h2>
                <div className="card">
                    <div className="card-body">
                        <h3>{item.nev}</h3>
                        <p>{item.nev} egy {item.kor} éves {item.faj}. Súlya körülbelül {item.suly} kg.</p>
                        <p><strong>Veszélyeztetett:</strong>{item.veszelyeztetett?"Igen":"Nem"}</p>
                        <p className="mb-0">
                            <strong>Kedvenc ételei:</strong> 
                            {item.kedvenc_etel.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
                )}
        </div>
    )
}
