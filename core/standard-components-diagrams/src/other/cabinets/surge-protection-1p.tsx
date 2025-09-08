import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SURGE_PROTECTION_1P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.surge_protection_1p;',
  },
  _original_width: 9,
  _original_height: 50,
}

export function SurgeProtection1p(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURGE_PROTECTION_1P}
      {...props}
      _style={extendStyle(SURGE_PROTECTION_1P, props)}
    />
  )
}
