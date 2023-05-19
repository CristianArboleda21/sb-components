import './mylabel.css'


export interface Props {

  /**
   * Texto que ira en el label
   */
  label?: string;

  /**
   * Tamaño del texto
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Pone todo el label en mayuscula
   */
  allcaps?: boolean;

  /**
   * Le cambia el color al label
   */
  color?: 'text-primary' | 'text-secundary' | 'text-tertiary';
 
  /**
   * Cambiar el color del label personalizado
   */
  fontColor?: string;
}

export const MyLabel = ( { label = 'No Label', size = 'normal', allcaps = false, color = 'text-secundary', fontColor }: Props ) => {
  return (
    <span className={ `label ${ size } ${ color }` } style={{ color: fontColor }}>
        { allcaps ? label.toUpperCase() : label }
    </span>
  )
}
