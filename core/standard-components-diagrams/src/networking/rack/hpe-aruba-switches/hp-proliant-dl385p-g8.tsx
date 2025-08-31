import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HP_PROLIANT_DL385P_G8 = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_proliant_dl385p_g8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function HpProliantDl385pG8(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_PROLIANT_DL385P_G8}
      {...props}
      _style={extendStyle(HP_PROLIANT_DL385P_G8, props)}
    />
  )
}
