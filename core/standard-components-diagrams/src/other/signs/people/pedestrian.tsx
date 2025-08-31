import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEDESTRIAN = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.pedestrian;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 80,
  _height: 99,
}

export function Pedestrian(props: DiagramNodeProps) {
  return (
    <Shape {...PEDESTRIAN} {...props} _style={extendStyle(PEDESTRIAN, props)} />
  )
}
