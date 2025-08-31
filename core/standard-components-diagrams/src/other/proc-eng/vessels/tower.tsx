import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 14,
  _height: 97,
}

export function Tower(props: DiagramNodeProps) {
  return <Shape {...TOWER} {...props} _style={extendStyle(TOWER, props)} />
}
