import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRESSER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.dresser;',
  _width: 100,
  _height: 65,
}

export function Dresser(props: DiagramNodeProps) {
  return <Shape {...DRESSER} {...props} _style={extendStyle(DRESSER, props)} />
}
