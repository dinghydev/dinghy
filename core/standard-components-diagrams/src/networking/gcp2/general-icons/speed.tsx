import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPEED = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.speed',
  _width: 100,
  _height: 57,
}

export function Speed(props: DiagramNodeProps) {
  return <Shape {...SPEED} {...props} />
}
