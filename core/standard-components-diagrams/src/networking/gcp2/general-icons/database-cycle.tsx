import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_CYCLE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_cycle',
  _width: 100,
  _height: 98,
}

export function DatabaseCycle(props: DiagramNodeProps) {
  return <Shape {...DATABASE_CYCLE} {...props} />
}
