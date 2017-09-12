var cssID = 'custom_css';
if (!document.getElementById(cssID))
{
    var head    = document.getElementsByTagName('head')[0];
    var link    = document.createElement('link');
    link.id     = cssID;
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = '_static/custom.css';
    link.media  = 'all';
    head.appendChild(link);
}
