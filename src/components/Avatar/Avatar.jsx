/* eslint-disable react/prop-types */
import S from './Avatar.module.css'

export function Avatar({ hasBorder, src}) {
  return (
    <img className={hasBorder ? S.avatarWithBorder : S.avatar} 
      src={src} alt="" 
    />
  )
}

