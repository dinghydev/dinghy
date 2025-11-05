import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HP_BLADESYSTEM_C3000_ENCLOSURE = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_bladesystem_c3000_enclosure;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 89,
}

export function HpBladesystemC3000Enclosure(props: NodeProps) {
  return (
    <Shape
      {...HP_BLADESYSTEM_C3000_ENCLOSURE}
      {...props}
      _style={extendStyle(HP_BLADESYSTEM_C3000_ENCLOSURE, props)}
    />
  )
}
