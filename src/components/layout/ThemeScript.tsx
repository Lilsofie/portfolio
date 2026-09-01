export default function ThemeScript() {
  const code = `(function(){try{
if(localStorage.getItem('theme')==='dark'){document.documentElement.setAttribute('data-theme','dark');}
else{document.documentElement.removeAttribute('data-theme');}
}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
