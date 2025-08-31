import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAIL = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.trail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function Trail(props: DiagramNodeProps) {
  return <Shape {...TRAIL} {...props} _style={extendStyle(TRAIL, props)} />
}
