import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCUBA_DIVING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.scuba_diving;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 83,
}

export function ScubaDiving(props: NodeProps) {
  return (
    <Shape
      {...SCUBA_DIVING}
      {...props}
      _style={extendStyle(SCUBA_DIVING, props)}
    />
  )
}
