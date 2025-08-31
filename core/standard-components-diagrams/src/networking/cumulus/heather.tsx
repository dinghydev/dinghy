import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEATHER = {
  _style: 'fillColor=#D2D6DF;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Heather(props: DiagramNodeProps) {
  return <Shape {...HEATHER} {...props} _style={extendStyle(HEATHER, props)} />
}
