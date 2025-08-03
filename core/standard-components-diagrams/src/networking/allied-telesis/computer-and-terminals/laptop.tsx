import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAPTOP = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Laptop.svg;strokeColor=none;',
  _width: 42,
  _height: 42.599999999999994,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} />
}
