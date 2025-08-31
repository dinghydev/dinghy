import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UTILITY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.utility;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 60,
}

export function Utility(props: DiagramNodeProps) {
  return <Shape {...UTILITY} {...props} _style={extendStyle(UTILITY, props)} />
}
