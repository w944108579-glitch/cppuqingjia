document.documentElement.style.visibility = 'hidden';

const siteAccessText = sessionStorage.getItem('siteAccess');
if (!siteAccessText) {
    window.location.replace('login.html');
} else {
    window.siteProfile = JSON.parse(siteAccessText);
    document.documentElement.style.visibility = 'visible';
}

function exitWebsite() {
    sessionStorage.removeItem('siteAccess');
    window.history.back();
}
