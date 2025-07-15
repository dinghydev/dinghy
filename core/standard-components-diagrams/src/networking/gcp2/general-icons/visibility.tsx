import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VISIBILITY = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.visibility',
  _width: 100,
  _height: 94,
}

export function Visibility(props: DiagramNodeProps) {
  return <Shape {...VISIBILITY} {...props} />
}
