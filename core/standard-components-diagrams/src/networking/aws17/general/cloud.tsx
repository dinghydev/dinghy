import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloud_2;fillColor=#F58534;gradientColor=none;',
  _width: 75,
  _height: 75,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} />
}
