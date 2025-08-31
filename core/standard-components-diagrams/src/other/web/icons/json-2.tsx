import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JSON_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.json_2;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Json2(props: DiagramNodeProps) {
  return <Shape {...JSON_2} {...props} _style={extendStyle(JSON_2, props)} />
}
