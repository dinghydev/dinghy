import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_DISCONNECTOR_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.switchDisconnector;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function SwitchDisconnectorOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_DISCONNECTOR_OFF}
      {...props}
      _style={extendStyle(SWITCH_DISCONNECTOR_OFF, props)}
    />
  )
}
