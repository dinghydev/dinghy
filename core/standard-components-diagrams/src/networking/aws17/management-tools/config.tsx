import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONFIG = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.config;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Config(props: DiagramNodeProps) {
  return <Shape {...CONFIG} {...props} />
}
