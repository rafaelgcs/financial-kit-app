import dark_theme from "./dark_theme";
import light_theme from "./light_theme";


const getSelectedTheme = (theme) => {
    let theme_selected = dark_theme;
    switch (theme) {
        case 'dark':
            theme_selected = dark_theme;
            break;
        case 'light':
            theme_selected = light_theme;
            break;
        default:
            break;
    }

    return theme_selected
}


export {
    getSelectedTheme,
}