import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAT5E_RACK_MOUNT_PATCH_PANEL_24_PORTS = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.cat5e_rack_mount_patch_panel_24_ports;',
  },
  _original_width: 160,
  _original_height: 15,
}

export function Cat5eRackMountPatchPanel24Ports(props: DiagramNodeProps) {
  return (
    <Shape
      {...CAT5E_RACK_MOUNT_PATCH_PANEL_24_PORTS}
      {...props}
      _style={extendStyle(CAT5E_RACK_MOUNT_PATCH_PANEL_24_PORTS, props)}
    />
  )
}
