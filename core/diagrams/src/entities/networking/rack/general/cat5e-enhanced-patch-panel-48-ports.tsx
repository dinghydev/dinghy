import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAT5E_ENHANCED_PATCH_PANEL_48_PORTS = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.cat5e_enhanced_patch_panel_48_ports;',
  },
  _width: 160,
  _height: 30,
}

export function Cat5eEnhancedPatchPanel48Ports(props: NodeProps) {
  return (
    <Shape
      {...CAT5E_ENHANCED_PATCH_PANEL_48_PORTS}
      {...props}
      _style={extendStyle(CAT5E_ENHANCED_PATCH_PANEL_48_PORTS, props)}
    />
  )
}
