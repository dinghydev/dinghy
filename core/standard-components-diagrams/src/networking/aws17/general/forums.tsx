import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORUMS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.forums;fillColor=#F58534;gradientColor=none;',
  _width: 85.5,
  _height: 82.5,
}

export function Forums(props: DiagramNodeProps) {
  return <Shape {...FORUMS} {...props} _style={extendStyle(FORUMS, props)} />
}
