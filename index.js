
document.getElementById('resume-button-1').onclick=()=>{
    downloadFile('https://drive.google.com/file/d/1XKD2XxwptdWtARofnDBEnT7-Rivp49O1/view?usp=share_link','Ankesh_Kewat_resume')
}

function downloadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };