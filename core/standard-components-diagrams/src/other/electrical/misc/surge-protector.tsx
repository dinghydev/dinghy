import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SURGE_PROTECTOR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.surge_protector;',
  _width: 70,
  _height: 20,
}

export function SurgeProtector(props: DiagramNodeProps) {
  return <Shape {...SURGE_PROTECTOR} {...props} />
}
