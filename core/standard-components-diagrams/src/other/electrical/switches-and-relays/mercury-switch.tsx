import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MERCURY_SWITCH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.mercury_switch;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MercurySwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...MERCURY_SWITCH}
      {...props}
      _style={extendStyle(MERCURY_SWITCH, props)}
    />
  )
}
