import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO_WAY_CONTACT_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoWayContact2;elSwitchState=2;',
  _width: 75,
  _height: 30,
}

export function TwoWayContact2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_WAY_CONTACT_2}
      {...props}
      _style={extendStyle(TWO_WAY_CONTACT_2, props)}
    />
  )
}
