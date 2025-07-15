import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEALTHY = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.healthy;',
  _width: 50,
  _height: 45,
}

export function Healthy(props: DiagramNodeProps) {
  return <Shape {...HEALTHY} {...props} />
}
