import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIOP = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.piop;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function Piop(props: DiagramNodeProps) {
  return <Shape {...PIOP} {...props} _style={extendStyle(PIOP, props)} />
}
