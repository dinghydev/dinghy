import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEPLOYMENT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.deployment;fillColor=#F58534;gradientColor=none;',
  _width: 55.5,
  _height: 73.5,
}

export function Deployment(props: DiagramNodeProps) {
  return <Shape {...DEPLOYMENT} {...props} />
}
