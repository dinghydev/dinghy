import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HP_BLADESYSTEM_C3000_ENCLOSURE = {
  _style:
    'shape=mxgraph.rack.hp.hp_bladesystem_c3000_enclosure;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 89,
}

export function HpBladesystemC3000Enclosure(props: DiagramNodeProps) {
  return <Shape {...HP_BLADESYSTEM_C3000_ENCLOSURE} {...props} />
}
