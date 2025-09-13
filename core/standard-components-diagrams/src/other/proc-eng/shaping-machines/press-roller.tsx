import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRESS_ROLLER = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.press_(roller);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 60,
}

export function PressRoller(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRESS_ROLLER}
      {...props}
      _style={extendStyle(PRESS_ROLLER, props)}
    />
  )
}
