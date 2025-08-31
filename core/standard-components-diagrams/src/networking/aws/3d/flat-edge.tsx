import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLAT_EDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.flatEdge2;strokeColor=none;fillColor=#F4B934;aspect=fixed;',
  },
  _width: 63.2,
  _height: 36,
}

export function FlatEdge(props: DiagramNodeProps) {
  return (
    <Shape {...FLAT_EDGE} {...props} _style={extendStyle(FLAT_EDGE, props)} />
  )
}
