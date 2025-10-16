import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GOLFING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.golfing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 55,
  _height: 99,
}

export function Golfing(props: DiagramNodeProps) {
  return <Shape {...GOLFING} {...props} _style={extendStyle(GOLFING, props)} />
}
