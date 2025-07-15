import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REPOSITORY_2 = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.repository_2',
  _width: 94,
  _height: 100,
}

export function Repository2(props: DiagramNodeProps) {
  return <Shape {...REPOSITORY_2} {...props} />
}
