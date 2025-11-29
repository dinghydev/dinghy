import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TURN_ON_OFF = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.turn_on_off;',
  },
  _original_width: 21,
  _original_height: 21,
}

export function TurnOnOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TURN_ON_OFF)} />
}
