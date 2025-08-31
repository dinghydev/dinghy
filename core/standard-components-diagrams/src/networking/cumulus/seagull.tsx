import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEAGULL = {
  _style: 'fillColor=#1EB5BD;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Seagull(props: DiagramNodeProps) {
  return <Shape {...SEAGULL} {...props} _style={extendStyle(SEAGULL, props)} />
}
