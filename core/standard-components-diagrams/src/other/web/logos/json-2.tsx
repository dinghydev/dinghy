import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JSON_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.json_2',
  _width: 80.4,
  _height: 25.200000000000003,
}

export function Json2(props: DiagramNodeProps) {
  return <Shape {...JSON_2} {...props} />
}
