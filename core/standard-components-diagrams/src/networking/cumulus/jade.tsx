import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JADE = {
  _style: 'fillColor=#00AD69;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Jade(props: DiagramNodeProps) {
  return <Shape {...JADE} {...props} _style={extendStyle(JADE, props)} />
}
