import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SURGE_PROTECTOR_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.surge_protector_2;',
  _width: 70,
  _height: 24,
}

export function SurgeProtector2(props: DiagramNodeProps) {
  return <Shape {...SURGE_PROTECTOR_2} {...props} />
}
