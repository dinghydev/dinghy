import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JSON_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.json_2;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Json2(props: DiagramNodeProps) {
  return <Shape {...JSON_2} {...props} />
}
