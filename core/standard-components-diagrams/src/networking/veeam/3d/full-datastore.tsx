import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FULL_DATASTORE = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.full_datastore;',
  _width: 44,
  _height: 60,
}

export function FullDatastore(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_DATASTORE}
      {...props}
      _style={extendStyle(FULL_DATASTORE, props)}
    />
  )
}
