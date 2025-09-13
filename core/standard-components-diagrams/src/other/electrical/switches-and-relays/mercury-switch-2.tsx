import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MERCURY_SWITCH_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.mercury_switch_2;',
  },
  _width: 50,
  _height: 90,
}

export function MercurySwitch2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MERCURY_SWITCH_2}
      {...props}
      _style={extendStyle(MERCURY_SWITCH_2, props)}
    />
  )
}
