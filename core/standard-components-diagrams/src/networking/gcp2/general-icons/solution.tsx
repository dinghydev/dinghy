import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOLUTION = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.solution',
  },
  _original_width: 99,
  _original_height: 100,
}

export function Solution(props: DiagramNodeProps) {
  return (
    <Shape {...SOLUTION} {...props} _style={extendStyle(SOLUTION, props)} />
  )
}
