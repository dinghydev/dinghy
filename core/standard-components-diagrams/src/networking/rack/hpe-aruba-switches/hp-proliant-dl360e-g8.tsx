import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HP_PROLIANT_DL360E_G8 = {
  _style:
    'shape=mxgraph.rack.hp.hp_proliant_dl360e_g8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function HpProliantDl360eG8(props: DiagramNodeProps) {
  return <Shape {...HP_PROLIANT_DL360E_G8} {...props} />
}
