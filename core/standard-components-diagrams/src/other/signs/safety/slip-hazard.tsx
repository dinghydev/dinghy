import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLIP_HAZARD = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.slip_hazard;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 78,
  _original_height: 100,
}

export function SlipHazard(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIP_HAZARD}
      {...props}
      _style={extendStyle(SLIP_HAZARD, props)}
    />
  )
}
