import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HP_PROLIANT_BL620C_SERVER_BLADE = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_proliant_bl620c_server_blade;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function HpProliantBl620cServerBlade(props: NodeProps) {
  return (
    <Shape
      {...HP_PROLIANT_BL620C_SERVER_BLADE}
      {...props}
      _style={extendStyle(HP_PROLIANT_BL620C_SERVER_BLADE, props)}
    />
  )
}
