import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLIP_HAZARD = {
  _style:
    'shape=mxgraph.signs.safety.slip_hazard;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 78,
  _height: 100,
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
