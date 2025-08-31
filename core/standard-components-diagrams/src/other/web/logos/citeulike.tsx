import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITEULIKE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.citeulike;fillColor=#698139',
  _width: 75.60000000000001,
  _height: 36,
}

export function Citeulike(props: DiagramNodeProps) {
  return (
    <Shape {...CITEULIKE} {...props} _style={extendStyle(CITEULIKE, props)} />
  )
}
