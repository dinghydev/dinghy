import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTO_COUPLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.opto-coupler;',
  },
  _original_width: 99,
  _original_height: 60,
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
