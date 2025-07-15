import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROCESS = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.process',
  _width: 84,
  _height: 100,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} />
}
