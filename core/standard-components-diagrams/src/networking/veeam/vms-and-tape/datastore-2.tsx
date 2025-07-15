import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATASTORE_2 = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#75B4DB;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.datastore;',
  _width: 43.2,
  _height: 44.4,
}

export function Datastore2(props: DiagramNodeProps) {
  return <Shape {...DATASTORE_2} {...props} />
}
