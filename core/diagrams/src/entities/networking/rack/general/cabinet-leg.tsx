import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CABINET_LEG = {
  _style: {
    entity:
      'shape=mxgraph.rackGeneral.cabinetLeg;html=1;shadow=0;dashed=0;fillColor=#444444;strokeColor=#444444;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CabinetLeg(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CABINET_LEG)} />
}
