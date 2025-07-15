import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON = {
  _style: 'ellipse;html=1;whiteSpace=wrap;',
  _width: 50,
  _height: 25,
}

export function Icon(props: DiagramNodeProps) {
  return <Shape {...ICON} {...props} />
}
