import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPLATE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.template;fillColor=#759C3E;gradientColor=none;',
  _width: 55.5,
  _height: 64.5,
}

export function Template(props: DiagramNodeProps) {
  return <Shape {...TEMPLATE} {...props} />
}
