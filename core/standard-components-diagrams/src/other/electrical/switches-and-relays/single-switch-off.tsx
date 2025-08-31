import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_SWITCH_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.singleSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 20,
}

export function SingleSwitchOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SWITCH_OFF}
      {...props}
      _style={extendStyle(SINGLE_SWITCH_OFF, props)}
    />
  )
}
