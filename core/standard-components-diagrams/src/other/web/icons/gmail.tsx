import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GMAIL = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.gmail;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Gmail(props: DiagramNodeProps) {
  return <Shape {...GMAIL} {...props} _style={extendStyle(GMAIL, props)} />
}
