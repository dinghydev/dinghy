import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHP = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#5A69A4;gradientColor=none;',
  _width: 73.5,
  _height: 84,
}

export function Php(props: DiagramNodeProps) {
  return <Shape {...PHP} {...props} />
}
