import styles from './Contacts.module.css'
import Backgroung from '../../../containers/Background/background';
import LineName from '../../../containers/Lines/LineName';
import ContactsSocial from './ContactsSocials';
import { useRef ,useState} from 'react';
const Contacts =()=>{
    const links= [
        {img:"images/social/github.png", name: "GitHub" , link:"https://github.com/VladaEs"},
        {img:"images/social/instagram.png", name: "Instagram", link:"https://www.instagram.com/_vlad.voronin_/"},
        {img:"images/social/linkedIn.png", name: "LinkedIn", link:"https://www.linkedin.com/in/%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D0%BD-%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-65590b237/"},
    ];

    const [PopUpActive, SetPopUpActive]=useState(false);

    const ref= useRef("lalalal");
    const popUp =useRef(false);
    const MailHandler=()=>{
        console.log(ref.current.textContent);
        
            navigator.clipboard.writeText(ref.current.textContent).then(function() {

            }).catch(function(error) {
                console.error('CannotCopy');
            });
            SetPopUpActive(true);
            setTimeout(()=>{
                SetPopUpActive(false);               
            },1500);

    }
    return(
        <div className={styles.pageWrapper}>
            <Backgroung />
            <LineName>Vladyslav Voronin</LineName>
            <div className={styles.center}>
                <span >Feel free to contact me via these social-media:</span>
                <div className={styles.links}>
                    {links.map((item,index) =>(<ContactsSocial key={index} item={item}/>))}
                </div>
                <div className={styles.EmailWrapper} onClick={MailHandler}>
                    <span className={`${styles.popUp} ${PopUpActive==true?styles.popUpActive:''}` } >Copied to clipboard</span>
                    <img src={"images/social/email.png"}/>
                    <span>My email:</span>
                    <span ref={ref}>vooronin2005@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
export default Contacts;