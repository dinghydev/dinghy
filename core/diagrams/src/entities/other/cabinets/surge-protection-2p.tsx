import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SURGE_PROTECTION_2P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.surge_protection_2p;',
  },
  _width: 18,
  _height: 50,
}

export function SurgeProtection2p(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURGE_PROTECTION_2P}
      {...props}
      _style={extendStyle(SURGE_PROTECTION_2P, props)}
    />
  )
}
