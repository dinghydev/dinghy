import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLAT_TV = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.flat_tv;',
  _width: 70,
  _height: 10,
}

export function FlatTv(props: DiagramNodeProps) {
  return <Shape {...FLAT_TV} {...props} _style={extendStyle(FLAT_TV, props)} />
}
