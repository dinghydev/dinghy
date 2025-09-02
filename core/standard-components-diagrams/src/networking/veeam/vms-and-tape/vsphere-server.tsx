import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VSPHERE_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vsphere_server;',
  },
  _original_width: 76,
  _original_height: 72,
}

export function VsphereServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VSPHERE_SERVER}
      {...props}
      _style={extendStyle(VSPHERE_SERVER, props)}
    />
  )
}
