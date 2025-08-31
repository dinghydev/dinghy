import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAPTOP = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Laptop.svg;strokeColor=none;',
  },
  _width: 42,
  _height: 42.599999999999994,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} _style={extendStyle(LAPTOP, props)} />
}
