import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_TURN_ON_OFF = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_turn_on_off;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function VmTurnOnOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_TURN_ON_OFF}
      {...props}
      _style={extendStyle(VM_TURN_ON_OFF, props)}
    />
  )
}
