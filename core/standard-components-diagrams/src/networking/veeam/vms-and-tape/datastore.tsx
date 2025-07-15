import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATASTORE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.datastore;',
  _width: 44.4,
  _height: 45.2,
}

export function Datastore(props: DiagramNodeProps) {
  return <Shape {...DATASTORE} {...props} />
}
