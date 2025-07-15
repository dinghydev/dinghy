import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EBS_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.ebs2;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 92,
  _height: 60,
}

export function Ebs2(props: DiagramNodeProps) {
  return <Shape {...EBS_2} {...props} />
}
