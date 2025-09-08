import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESIDUAL_CURRENT_DEVICE_4P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.residual_current_device_4p;',
  },
  _original_width: 36,
  _original_height: 50,
}

export function ResidualCurrentDevice4p(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESIDUAL_CURRENT_DEVICE_4P}
      {...props}
      _style={extendStyle(RESIDUAL_CURRENT_DEVICE_4P, props)}
    />
  )
}
