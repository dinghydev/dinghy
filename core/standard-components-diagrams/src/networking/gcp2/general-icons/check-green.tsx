import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK_GREEN = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check',
  _width: 100,
  _height: 80,
}

export function CheckGreen(props: DiagramNodeProps) {
  return <Shape {...CHECK_GREEN} {...props} />
}
