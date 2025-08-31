import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_SWITCH_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.singleSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function SingleSwitchOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SWITCH_ON}
      {...props}
      _style={extendStyle(SINGLE_SWITCH_ON, props)}
    />
  )
}
