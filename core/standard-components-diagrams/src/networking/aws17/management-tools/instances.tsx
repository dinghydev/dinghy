import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCES = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.instances_2;fillColor=#759C3E;gradientColor=none;',
  _width: 81,
  _height: 81,
}

export function Instances(props: DiagramNodeProps) {
  return <Shape {...INSTANCES} {...props} />
}
