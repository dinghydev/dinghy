import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELAYED_ACTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.delayed_action;pointerEvents=1;',
  },
  _width: 72,
  _height: 50,
}

export function DelayedAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...DELAYED_ACTION}
      {...props}
      _style={extendStyle(DELAYED_ACTION, props)}
    />
  )
}
