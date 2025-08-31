import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FERN = {
  _style: 'fillColor=#4BC05B;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Fern(props: DiagramNodeProps) {
  return <Shape {...FERN} {...props} _style={extendStyle(FERN, props)} />
}
