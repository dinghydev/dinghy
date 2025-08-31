import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.generic;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 60,
}

export function Generic(props: DiagramNodeProps) {
  return <Shape {...GENERIC} {...props} _style={extendStyle(GENERIC, props)} />
}
