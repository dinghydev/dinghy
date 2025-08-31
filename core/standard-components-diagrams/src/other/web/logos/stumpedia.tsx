import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STUMPEDIA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.stumpedia',
  _width: 67,
  _height: 67.60000000000001,
}

export function Stumpedia(props: DiagramNodeProps) {
  return (
    <Shape {...STUMPEDIA} {...props} _style={extendStyle(STUMPEDIA, props)} />
  )
}
