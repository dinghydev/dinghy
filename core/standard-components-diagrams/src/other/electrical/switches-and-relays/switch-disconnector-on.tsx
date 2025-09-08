import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_DISCONNECTOR_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.switchDisconnector;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function SwitchDisconnectorOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_DISCONNECTOR_ON}
      {...props}
      _style={extendStyle(SWITCH_DISCONNECTOR_ON, props)}
    />
  )
}
