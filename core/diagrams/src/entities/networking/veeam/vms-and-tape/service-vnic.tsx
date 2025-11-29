import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_VNIC = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.service_vnic;',
  },
  _original_width: 56.8,
  _original_height: 54,
}

export function ServiceVnic(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVICE_VNIC)} />
}
