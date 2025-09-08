import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELAYED_ACTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.delayed_action;pointerEvents=1;',
  },
  _original_width: 72,
  _original_height: 50,
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
