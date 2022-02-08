import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.container}>
            <div>
                Copyright <span>&copy;</span> 2022
            </div>
        </div>
    )
}

export default Footer