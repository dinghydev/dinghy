import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HP_PROLIANT_BL660C_SERVER_BLADE = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_proliant_bl660c_server_blade;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 19,
  _original_height: 121,
}

export function HpProliantBl660cServerBlade(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_PROLIANT_BL660C_SERVER_BLADE}
      {...props}
      _style={extendStyle(HP_PROLIANT_BL660C_SERVER_BLADE, props)}
    />
  )
}
