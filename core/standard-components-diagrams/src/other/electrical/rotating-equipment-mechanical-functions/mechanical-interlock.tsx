import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MECHANICAL_INTERLOCK = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.mechanical_interlock;pointerEvents=1;',
  _width: 100,
  _height: 30,
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
