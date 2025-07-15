import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROPERTY = {
  _style:
    'align=right;verticalAlign=top;spacingRight=2;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 50,
}

export function Property(props: DiagramNodeProps) {
  return <Shape {...PROPERTY} {...props} />
}
