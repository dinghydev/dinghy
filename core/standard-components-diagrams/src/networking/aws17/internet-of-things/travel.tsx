import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAVEL = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.travel;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 60,
}

export function Travel(props: DiagramNodeProps) {
  return <Shape {...TRAVEL} {...props} _style={extendStyle(TRAVEL, props)} />
}
