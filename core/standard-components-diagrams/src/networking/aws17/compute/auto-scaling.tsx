import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTO_SCALING = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.auto_scaling;fillColor=#F58534;gradientColor=none;',
  _width: 79.5,
  _height: 76.5,
}

export function AutoScaling(props: DiagramNodeProps) {
  return <Shape {...AUTO_SCALING} {...props} />
}
