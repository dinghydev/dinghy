import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sms;fillColor=#48B921;strokeColor=none',
  _width: 69.2,
  _height: 64,
}

export function Sms(props: DiagramNodeProps) {
  return <Shape {...SMS} {...props} />
}
