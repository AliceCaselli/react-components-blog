import style from "../css/modules/Card.module.css"


export default function Card() {
    return (

        <div className={style.card}>
            <img className={style.img} src="https://fastly.picsum.photos/id/216/600/400.jpg?hmac=fYb8tMDxwuyEPTKiRbCa4QkhA_e9E0oXv50dK-OLWCM" alt="" />
            <div className={style.text}>

                <h5 className={style.h5}>TheTitle</h5>
                <p className={style.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, sequi optio? Provident rem beatae non laborum similique, nobis ad modi reprehenderit in dolore veniam distinctio atque cupiditate ex, accusantium ab.</p>
                <button className={style.btn}>TheButton</button>
            </div>
        </div>
    );
}