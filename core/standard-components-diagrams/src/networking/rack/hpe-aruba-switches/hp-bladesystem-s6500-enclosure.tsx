import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HP_BLADESYSTEM_S6500_ENCLOSURE = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_bladesystem_s6500_enclosure;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 60,
}

export function HpBladesystemS6500Enclosure(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_BLADESYSTEM_S6500_ENCLOSURE}
      {...props}
      _style={extendStyle(HP_BLADESYSTEM_S6500_ENCLOSURE, props)}
    />
  )
}
