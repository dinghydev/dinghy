import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SURGE_PROTECTION_4P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.surge_protection_4p;',
  },
  _width: 36,
  _height: 50,
}

export function SurgeProtection4p(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURGE_PROTECTION_4P}
      {...props}
      _style={extendStyle(SURGE_PROTECTION_4P, props)}
    />
  )
}
