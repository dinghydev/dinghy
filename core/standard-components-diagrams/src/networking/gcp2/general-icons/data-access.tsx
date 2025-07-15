import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_ACCESS = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.data_access',
  _width: 93,
  _height: 100,
}

export function DataAccess(props: DiagramNodeProps) {
  return <Shape {...DATA_ACCESS} {...props} />
}
