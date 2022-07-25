import React from 'react'
import s from './Clients.module.scss'
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import useAppContext from '../../Context/UseAppContext';

export default function Referals() {
   const { lang } = useAppContext();
   return (
      <div className={s.container}>
         <div className={s.filter}>
            <SectionTitle>{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>

            <div className={s.clients_container}>
               <div className={s.client_logo}>{logoWalmart}</div>
               <div className={s.client_logo}>{logoWalmart}</div>
               <div className={s.client_logo}>{logoWalmart}</div>
               <div className={s.client_logo}>{logoWalmart}</div>
               <div className={s.client_logo}>{logoWalmart}</div>
               <div className={s.client_logo}>{logoWalmart}</div>
            </div>

         </div>
      </div>
   )
}

const esp = [
   "Clientes"
]

const eng = [
   "Clients"
]

let logoWalmart = <svg width="114" height="27" viewBox="0 0 229 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M135.474 29.8037C135.474 24.2728 133.107 19.3861 125.1 19.3861C120.992 19.3861 117.728 20.5569 115.959 21.5818L117.256 26.0191C118.885 24.9971 121.484 24.1554 123.937 24.1554C127.991 24.1497 128.655 26.4428 128.655 27.9171V28.2721C119.806 28.2578 114.213 31.3152 114.213 37.5417C114.213 41.3463 117.052 44.9133 122.017 44.9133C125.045 44.9133 127.605 43.6909 129.133 41.7614H129.282C129.282 41.7614 130.29 45.9783 135.864 44.3666C135.58 42.6002 135.474 40.7394 135.474 38.4778V29.8037V29.8037ZM128.873 35.6437C128.873 36.0903 128.836 36.5541 128.704 36.952C128.194 38.6553 126.437 40.081 124.249 40.081C122.403 40.081 120.954 39.0361 120.954 36.8461C120.954 33.4966 124.653 32.5748 128.873 32.5977" fill="white"/>
<path d="M0 11.8607C0 11.8607 5.77987 35.5071 6.69886 39.3375C7.78095 43.8149 9.71905 45.4696 15.3129 44.3674L18.9257 29.7043C19.8389 26.0715 20.4601 23.4664 21.0499 19.7648H21.15C21.5594 23.5036 22.1492 26.0715 22.8963 29.7158C22.8963 29.7158 24.3706 36.3774 25.1351 39.8671C25.8793 43.3568 27.9748 45.5583 33.4628 44.3674L42.0626 11.8607H35.1203L32.1689 25.9226C31.3873 29.9963 30.6773 33.2055 30.1248 36.9385H30.0246C29.5265 33.2456 28.8938 30.1681 28.0808 26.1774L25.0234 11.8607H17.7806L14.517 25.811C13.5866 30.0708 12.7164 33.486 12.1695 37.1017H12.0751C11.5112 33.7093 10.7468 29.3894 9.93659 25.2899C9.93659 25.2899 7.99849 15.3018 7.31434 11.8607" fill="white"/>
<path d="M61.4093 29.8037C61.4093 24.2728 59.0359 19.3861 51.0288 19.3861C46.9323 19.3861 43.663 20.5569 41.8939 21.5818L43.1906 26.0191C44.8138 24.9971 47.4104 24.1554 49.8723 24.1554C53.926 24.1497 54.5901 26.4428 54.5901 27.9171V28.2721C45.7414 28.2578 40.1418 31.3152 40.1418 37.5417C40.1418 41.3463 42.9932 44.9133 47.9342 44.9133C50.9916 44.9133 53.5281 43.6909 55.0568 41.7614H55.2113C55.2113 41.7614 56.2247 45.9783 61.7928 44.3666C61.5066 42.6002 61.4093 40.7394 61.4093 38.4778V29.8037V29.8037ZM54.8021 35.6437C54.8021 36.0903 54.7648 36.5541 54.6389 36.952C54.1234 38.6553 52.3658 40.081 50.173 40.081C48.3379 40.081 46.8836 39.0361 46.8836 36.8461C46.8836 33.4966 50.5822 32.5748 54.8021 32.5977" fill="white"/>
<path d="M65.0117 11.8607V44.3559H71.6189V37.4653V11.8607H65.0117Z" fill="white"/>
<path d="M155.753 11.8607V35.8364C155.753 39.1457 156.374 41.4531 157.711 42.8673C158.885 44.1069 160.806 44.9142 163.093 44.9142C165.057 44.9142 166.978 44.5363 167.885 44.2071L167.805 39.0455C167.127 39.203 166.351 39.3375 165.286 39.3375C163.03 39.3375 162.286 37.909 162.286 34.9375V25.7594H168.04V19.5501H162.286V11.8607" fill="white"/>
<path d="M138.675 19.95V44.3665H145.506V31.862C145.506 31.1892 145.549 30.6081 145.655 30.0699C146.164 27.4333 148.165 25.7643 151.048 25.7643C151.853 25.7643 152.399 25.853 153.006 25.9475V19.5464C152.497 19.4548 152.15 19.4061 151.523 19.4061C148.967 19.4061 146.07 21.0293 144.847 24.5648H144.679V19.95" fill="white"/>
<path d="M75.4557 19.95V44.3665H82.1115V30.0355C82.1115 29.3628 82.186 28.6757 82.4236 28.0545C82.9647 26.6031 84.3074 24.9226 86.463 24.9226C89.1425 24.9226 90.4079 27.1842 90.4079 30.4478V44.3665H97.0467V29.8638C97.0467 29.2311 97.1355 28.4553 97.3214 27.8942C97.8539 26.2481 99.3082 24.9226 101.318 24.9226C104.026 24.9226 105.337 27.1356 105.337 30.9831V44.3665H111.97V29.9697C111.97 22.4063 108.123 19.4061 103.754 19.4061C101.833 19.4061 100.305 19.8785 98.9303 20.7258C97.768 21.4387 96.7489 22.4435 95.8356 23.7575H95.7355C94.6849 21.1295 92.2172 19.4061 88.9936 19.4061C84.8598 19.4061 82.9819 21.4931 81.8769 23.2565H81.7766V19.95" fill="white"/>
<path d="M203.787 18.8542C205.092 18.8542 206.191 18.1728 206.334 17.2968L207.628 2.63947C207.628 1.18805 205.919 0 203.787 0C201.642 0 199.945 1.18805 199.945 2.63947L201.25 17.2968C201.388 18.1728 202.481 18.8542 203.787 18.8542Z" fill="white"/>
<path d="M195.847 23.4406C196.494 22.2955 196.457 21.0244 195.759 20.4576L183.678 12.0096C182.421 11.2767 180.54 12.1499 179.464 13.9992C178.39 15.8457 178.608 17.9183 179.839 18.6369L193.213 24.8376C194.069 25.1583 195.189 24.5628 195.847 23.4291" fill="white"/>
<path d="M211.724 23.4286C212.408 24.5622 213.528 25.1577 214.361 24.8542L227.736 18.6363C228.978 17.9034 229.164 15.8508 228.114 14.0043C227.04 12.155 225.148 11.2876 223.894 12.0061L211.81 20.4456C211.14 21.021 211.092 22.2978 211.738 23.44" fill="white"/>
<path d="M203.787 37.163C205.092 37.163 206.191 37.8443 206.334 38.7203L207.628 53.3777C207.628 54.8291 205.919 56.0057 203.787 56.0057C201.642 56.0057 199.945 54.8291 199.945 53.3777L201.25 38.7203C201.388 37.8443 202.481 37.163 203.787 37.163Z" fill="white"/>
<path d="M211.724 32.5894C212.408 31.4529 213.528 30.846 214.361 31.1752L227.736 37.3817C228.978 38.1002 229.164 40.17 228.114 42.0194C227.04 43.8544 225.148 44.7275 223.894 44.009L211.81 35.5581C211.14 34.9884 211.092 33.7173 211.738 32.5894" fill="white"/>
<path d="M195.847 32.5768C196.494 33.7191 196.457 34.9873 195.759 35.5598L183.678 43.9964C182.421 44.7293 180.54 43.8533 179.464 42.0182C178.39 40.1717 178.608 38.0991 179.839 37.3805L193.213 31.1741C194.069 30.8477 195.189 31.4489 195.847 32.5768Z" fill="white"/>
</svg>