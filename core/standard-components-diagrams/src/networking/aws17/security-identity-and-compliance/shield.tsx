import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHIELD = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.shield;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 70.5,
}

export function Shield(props: DiagramNodeProps) {
  return <Shape {...SHIELD} {...props} />
}
