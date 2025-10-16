import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPENING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.opening;',
  },
  _width: 50,
  _height: 10,
}

export function Opening(props: DiagramNodeProps) {
  return <Shape {...OPENING} {...props} _style={extendStyle(OPENING, props)} />
}
