import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATHTUB = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bathtub2;',
  _width: 180,
  _height: 60,
}

export function Bathtub(props: DiagramNodeProps) {
  return <Shape {...BATHTUB} {...props} _style={extendStyle(BATHTUB, props)} />
}
