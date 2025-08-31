import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIUM_DATASTORE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.medium_datastore;',
  _width: 44,
  _height: 60,
}

export function MediumDatastore(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIUM_DATASTORE}
      {...props}
      _style={extendStyle(MEDIUM_DATASTORE, props)}
    />
  )
}
