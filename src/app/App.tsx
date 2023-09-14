import "./styles/index.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"

const App = () => {

    const { theme, toggleTheme } = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
        <Navbar />
        <AppRouter />
    </div>
}

export default App