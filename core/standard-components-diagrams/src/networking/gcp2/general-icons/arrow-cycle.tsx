import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_CYCLE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.arrow_cycle',
  },
  _original_width: 100,
  _original_height: 95,
}

export function ArrowCycle(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_CYCLE}
      {...props}
      _style={extendStyle(ARROW_CYCLE, props)}
    />
  )
}
