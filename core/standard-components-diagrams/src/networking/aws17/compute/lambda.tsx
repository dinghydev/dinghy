import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAMBDA = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.lambda;fillColor=#F58534;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Lambda(props: DiagramNodeProps) {
  return <Shape {...LAMBDA} {...props} />
}
