import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SNOWMOBILE = {
  _style:
    'shape=mxgraph.signs.sports.snowmobile;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 80,
}

export function Snowmobile(props: DiagramNodeProps) {
  return <Shape {...SNOWMOBILE} {...props} />
}
