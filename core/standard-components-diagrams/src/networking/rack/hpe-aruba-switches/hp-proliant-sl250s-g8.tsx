import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HP_PROLIANT_SL250S_G8 = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_proliant_sl250s_g8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 81,
  _original_height: 30,
}

export function HpProliantSl250sG8(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_PROLIANT_SL250S_G8}
      {...props}
      _style={extendStyle(HP_PROLIANT_SL250S_G8, props)}
    />
  )
}
