import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPDT = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.twoWaySwitch;aspect=fixed;elSwitchState=2;',
  _width: 75,
  _height: 26,
}

export function Spdt(props: DiagramNodeProps) {
  return <Shape {...SPDT} {...props} _style={extendStyle(SPDT, props)} />
}
