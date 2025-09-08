import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRESS_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.press_(piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function PressPiston(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRESS_PISTON}
      {...props}
      _style={extendStyle(PRESS_PISTON, props)}
    />
  )
}
