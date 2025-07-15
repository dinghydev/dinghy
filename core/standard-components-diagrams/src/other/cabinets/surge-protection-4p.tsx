import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SURGE_PROTECTION_4P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.surge_protection_4p;',
  _width: 36,
  _height: 50,
}

export function SurgeProtection4p(props: DiagramNodeProps) {
  return <Shape {...SURGE_PROTECTION_4P} {...props} />
}
