import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOLUTION = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.solution',
  _width: 99,
  _height: 100,
}

export function Solution(props: DiagramNodeProps) {
  return (
    <Shape {...SOLUTION} {...props} _style={extendStyle(SOLUTION, props)} />
  )
}
