const toggleTheme = document.getElementById('theme-toggle');
const logo = document.getElementById('logo');

function updateLogo(theme) {
    const logoPath = theme === 'dark' 
        ? './asset/dark-google-logo.png' 
        : './asset/light-google-logo.png';
    logo.src = logoPath;
}

// 초기 테마 설정
const initialTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', initialTheme);
updateLogo(initialTheme);

// 테마 변경 이벤트
toggleTheme.addEventListener('change', () => {
    const theme = toggleTheme.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateLogo(theme);
});
