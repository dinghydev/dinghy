import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOAD_BALANCING = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.load_balancing',
  _width: 100,
  _height: 26,
}

export function LoadBalancing(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_BALANCING}
      {...props}
      _style={extendStyle(LOAD_BALANCING, props)}
    />
  )
}
