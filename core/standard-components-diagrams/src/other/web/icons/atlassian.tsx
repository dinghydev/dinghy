import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATLASSIAN = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.atlassian;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Atlassian(props: DiagramNodeProps) {
  return (
    <Shape {...ATLASSIAN} {...props} _style={extendStyle(ATLASSIAN, props)} />
  )
}
