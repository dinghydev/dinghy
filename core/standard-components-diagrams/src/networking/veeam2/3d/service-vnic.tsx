import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_VNIC = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.service_vnic;',
  },
  _original_width: 72,
  _original_height: 64,
}

export function ServiceVnic(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_VNIC}
      {...props}
      _style={extendStyle(SERVICE_VNIC, props)}
    />
  )
}
