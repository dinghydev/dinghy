import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ONE_SERVER_2 = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_one_server;',
  _width: 44.8,
  _height: 44.8,
}

export function OneServer2(props: DiagramNodeProps) {
  return <Shape {...ONE_SERVER_2} {...props} />
}
