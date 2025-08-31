import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCUBA_DIVING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.scuba_diving;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 83,
}

export function ScubaDiving(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCUBA_DIVING}
      {...props}
      _style={extendStyle(SCUBA_DIVING, props)}
    />
  )
}
