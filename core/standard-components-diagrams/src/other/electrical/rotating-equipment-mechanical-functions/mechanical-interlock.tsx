import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MECHANICAL_INTERLOCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.mechanical_interlock;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function MechanicalInterlock(props: DiagramNodeProps) {
  return (
    <Shape
      {...MECHANICAL_INTERLOCK}
      {...props}
      _style={extendStyle(MECHANICAL_INTERLOCK, props)}
    />
  )
}
