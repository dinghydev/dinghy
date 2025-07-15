import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK_YELLOW = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#F4AF20;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check',
  _width: 100,
  _height: 80,
}

export function CheckYellow(props: DiagramNodeProps) {
  return <Shape {...CHECK_YELLOW} {...props} />
}
