import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUAL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.manual_control;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ManualControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUAL_CONTROL}
      {...props}
      _style={extendStyle(MANUAL_CONTROL, props)}
    />
  )
}
