import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESIDUAL_CURRENT_DEVICE_2P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.residual_current_device_2p;',
  _width: 18,
  _height: 50,
}

export function ResidualCurrentDevice2p(props: DiagramNodeProps) {
  return <Shape {...RESIDUAL_CURRENT_DEVICE_2P} {...props} />
}
