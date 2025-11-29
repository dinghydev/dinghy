import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HP_PROLIANT_BL685C_SERVER_BLADE = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_proliant_bl685c_server_blade;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 37,
  _height: 121,
}

export function HpProliantBl685cServerBlade(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, HP_PROLIANT_BL685C_SERVER_BLADE)}
    />
  )
}
