import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOILET = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.toilet;',
  _width: 50,
  _height: 67,
}

export function Toilet(props: DiagramNodeProps) {
  return <Shape {...TOILET} {...props} _style={extendStyle(TOILET, props)} />
}
