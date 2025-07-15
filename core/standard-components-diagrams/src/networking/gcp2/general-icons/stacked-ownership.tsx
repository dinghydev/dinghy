import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACKED_OWNERSHIP = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.stacked_ownership',
  _width: 100,
  _height: 100,
}

export function StackedOwnership(props: DiagramNodeProps) {
  return <Shape {...STACKED_OWNERSHIP} {...props} />
}
