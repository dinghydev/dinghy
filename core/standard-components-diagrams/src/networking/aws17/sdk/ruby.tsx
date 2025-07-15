import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RUBY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#AE1F23;gradientColor=none;',
  _width: 73.5,
  _height: 84,
}

export function Ruby(props: DiagramNodeProps) {
  return <Shape {...RUBY} {...props} />
}
