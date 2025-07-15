import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EMAIL = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.email;fillColor=#D9A741;gradientColor=none;',
  _width: 81,
  _height: 61.5,
}

export function Email(props: DiagramNodeProps) {
  return <Shape {...EMAIL} {...props} />
}
