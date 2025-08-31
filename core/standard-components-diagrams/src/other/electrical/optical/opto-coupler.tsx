import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTO_COUPLER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.opto-coupler;',
  _width: 99,
  _height: 60,
}

export function OptoCoupler(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPTO_COUPLER}
      {...props}
      _style={extendStyle(OPTO_COUPLER, props)}
    />
  )
}
