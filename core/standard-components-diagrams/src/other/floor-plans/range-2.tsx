import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RANGE_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.range_2;',
  _width: 75,
  _height: 62,
}

export function Range2(props: DiagramNodeProps) {
  return <Shape {...RANGE_2} {...props} _style={extendStyle(RANGE_2, props)} />
}
