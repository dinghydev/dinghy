import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESIDUAL_CURRENT_DEVICE_4P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.residual_current_device_4p;',
  _width: 36,
  _height: 50,
}

export function ResidualCurrentDevice4p(props: DiagramNodeProps) {
  return <Shape {...RESIDUAL_CURRENT_DEVICE_4P} {...props} />
}
