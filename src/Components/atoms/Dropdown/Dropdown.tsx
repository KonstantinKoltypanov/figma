import Vector from '@/assets/Vector.svg'
import * as style from './Dropdown.module.scss'

export const Dropdown: React.FC<{children: string, id: string}> = ({children, id}) => {
  return (
      <button className={style.button} >
        <span className={style.text} id={id}>
          {children}
        </span>
        <Vector className={style.vector}  />
      </button>
  )
}
