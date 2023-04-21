import React from 'react'

const DownRow = ({fill, onClick}) => {
  return (
    <svg 
    onClick={onClick}
    width="15" 
    height="17" 
    viewBox="0 0 15 17" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    >
      <path d="M8.90924 15.3491C8.17744 16.2731 6.7757 16.2748 6.04192 15.3523L0.934337 8.93092C0.166302 7.9657 0.846098 6.53956 2.07924 6.52748L3.46693 6.51368L3.46817 1.84902C3.46822 1.6086 3.51565 1.37054 3.60773 1.14846C3.69982 0.926372 3.83477 0.724609 4.00487 0.554696C4.17496 0.384784 4.37687 0.250054 4.59906 0.158204C4.82124 0.0663541 5.05935 0.0191845 5.29977 0.0193911L9.65805 0.0233342C10.143 0.0238972 10.6079 0.216931 10.9507 0.560034C11.2934 0.903137 11.4859 1.36825 11.486 1.85321L11.4865 6.5127L12.8419 6.51343C14.0804 6.51417 14.7713 7.94352 14.003 8.91441L8.90924 15.3491ZM6.72418 14.81C6.81407 14.923 6.92833 15.0143 7.05843 15.0769C7.18853 15.1396 7.3311 15.172 7.47551 15.1719C7.61991 15.1717 7.76241 15.1389 7.89236 15.076C8.02232 15.013 8.13637 14.9215 8.22599 14.8083L13.3198 8.37363C13.636 7.97359 13.3518 7.38524 12.8416 7.38475L11.0504 7.38401C10.9932 7.38401 10.9365 7.37275 10.8837 7.35085C10.8308 7.32895 10.7827 7.29685 10.7423 7.25639C10.7018 7.21592 10.6697 7.16788 10.6478 7.115C10.6259 7.06213 10.6146 7.00546 10.6146 6.94823L10.6149 1.85321C10.6148 1.59916 10.5139 1.35552 10.3343 1.17583C10.1547 0.99614 9.91112 0.895094 9.65707 0.894892L5.29878 0.890949C5.17286 0.890855 5.04816 0.915571 4.93179 0.963685C4.81542 1.0118 4.70968 1.08237 4.62059 1.17136C4.53151 1.26036 4.46083 1.36603 4.41259 1.48235C4.36436 1.59867 4.33951 1.72335 4.33948 1.84927L4.33825 6.94527C4.33827 7.06009 4.29297 7.17027 4.2122 7.25187C4.13143 7.33347 4.02171 7.37989 3.9069 7.38105L2.08787 7.39879C1.58012 7.40372 1.30036 7.99109 1.61635 8.38842L6.72418 14.81Z" 
      fill={fill ? fill : "#6F6F6F"}
       />
    </svg>

  )
}

export default DownRow