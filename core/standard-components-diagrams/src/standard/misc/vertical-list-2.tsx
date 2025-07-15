import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_LIST_2 = {
  _style:
    'text;html=1;strokeColor=none;fillColor=none;whiteSpace=wrap;align=center;verticalAlign=middle;fontColor=#0000EE;fontStyle=4;',
  _width: 0,
  _height: 40,
}

export function VerticalList2(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_LIST_2} {...props} />
}
