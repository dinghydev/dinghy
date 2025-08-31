import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FREE_DATASTORE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.free_datastore;',
  _width: 44,
  _height: 60,
}

export function FreeDatastore(props: DiagramNodeProps) {
  return (
    <Shape
      {...FREE_DATASTORE}
      {...props}
      _style={extendStyle(FREE_DATASTORE, props)}
    />
  )
}
