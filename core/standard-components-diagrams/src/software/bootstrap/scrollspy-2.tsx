import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCROLLSPY_2 = {
  _style:
    'fillColor=none;strokeColor=none;perimeter=none;whiteSpace=wrap;fontColor=#212529;html=1;align=left;verticalAlign=top;spacingRight=25;',
  _width: 1,
  _height: 300,
}

export function Scrollspy2(props: DiagramNodeProps) {
  return <Shape {...SCROLLSPY_2} {...props} />
}
