// 다크모드를 위한 테마 정리 js

// header
// 다크모드시에 헤더바 라이트모드 : #4b7fcc  다크모드 : #252528
// 버튼들 배경 #ffffff 고정
// 버튼들 글씨색 라이트 모드 : #4b7fcc , 다크모드 : #000000

// 밝은 테마 hover
export const lightTheme = {
    // Header or everyWhere
    background: '#ffffff', // 기본 다크 <-> 화이트 변경에 사용
    text: '#000000', // 기본 다크 <-> 화이트 변경에 사용
    primary: '#4b7fcc', // 아직 미사용
    nav: '#4b7fcc', // 버튼 호버시 유저목록, 유저등록에 사용
    header: '#4b7fcc', // 헤더 배경,  버튼 호버전 유저목록, 유저등록에 사용

    // User
    card: '#ffffff',
    cardText: '#000000',
    cardBorder: 'rgba(0, 0, 0, 0.05)',

    // User의 온라인 여부
    onlineText: '#198754', // 부드러운 초록
    offlineText: '#6c757d', // 중간 회색

    // UserStatsCard
    cardBg: '#ffffff',
    cardText: '#222222',
    cardLabel: '#666666',
    cardWrapBg: '#eff1f4',

    insertBtn: '#4b7fcc',
};

// 어두운 테마 hover
export const darkTheme = {
    // Header or everyWhere
    background: '#1c1d1e',
    text: '#ffffff',
    primary: '#8a8a91',
    nav: '#000000',
    header: '#252528',

    // User
    card: '#2a2b2e', // 카드 배경 (살짝 어두운 회색)
    cardText: '#ffffff',
    cardBorder: 'rgba(255, 255, 255, 0.1)',

    // User의 온라인 여부
    onlineText: '#71dd8a', // 밝은 연두 계열
    offlineText: '#a3a3a3', // 부드러운 중간 회색

    // UserStatsCard
    cardBg: '#2f3033',
    cardText: '#ffffff',
    cardLabel: '#a3a3a3',
    cardWrapBg: '#1c1d1e',

    insertBtn: '#ffffff',
};
