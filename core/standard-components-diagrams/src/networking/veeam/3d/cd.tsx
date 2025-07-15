import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CD = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.cd;',
  _width: 68,
  _height: 26,
}

export function Cd(props: DiagramNodeProps) {
  return <Shape {...CD} {...props} />
}
