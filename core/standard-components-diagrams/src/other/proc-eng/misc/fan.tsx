import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAN = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.fan;fanType=common',
  _width: 50,
  _height: 50,
}

export function Fan(props: DiagramNodeProps) {
  return <Shape {...FAN} {...props} />
}
