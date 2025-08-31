import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_DISCONNECTOR_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.switchDisconnector;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 20,
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
