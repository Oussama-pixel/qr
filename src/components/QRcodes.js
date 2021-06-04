import React from 'react'
import QRCode from 'qrcode.react'

export default function QRcodes({value}) {
    const downloadQRCode  = ()=>{
    const qrCodeURL =  document.getElementById("qrCodeEl")
    .toDataURL("image/png")
    .replace("image/png","image/octet-stream")
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
    }
    return (
        <div>    
        <QRCode
        id="qrCodeEl"
        size={220}
        value={value}
        onClick={downloadQRCode}
      />
        </div>
    )
}
