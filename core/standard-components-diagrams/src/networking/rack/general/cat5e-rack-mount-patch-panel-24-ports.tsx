import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAT5E_RACK_MOUNT_PATCH_PANEL_24_PORTS = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.cat5e_rack_mount_patch_panel_24_ports;',
  _width: 160,
  _height: 15,
}

export function Cat5eRackMountPatchPanel24Ports(props: DiagramNodeProps) {
  return <Shape {...CAT5E_RACK_MOUNT_PATCH_PANEL_24_PORTS} {...props} />
}
