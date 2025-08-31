import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOPPLR = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.dopplr;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Dopplr(props: DiagramNodeProps) {
  return <Shape {...DOPPLR} {...props} _style={extendStyle(DOPPLR, props)} />
}
