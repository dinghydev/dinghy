import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK_2 = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.scale',
  _width: 100,
  _height: 92,
}

export function Check2(props: DiagramNodeProps) {
  return <Shape {...CHECK_2} {...props} />
}
