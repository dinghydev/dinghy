import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATASTORE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore;',
  _width: 44,
  _height: 60,
}

export function Datastore(props: DiagramNodeProps) {
  return <Shape {...DATASTORE} {...props} />
}
