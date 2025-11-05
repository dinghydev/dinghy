import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATASTORE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.datastore;',
  },
  _width: 28.000000000000004,
  _height: 35,
}

export function Datastore(props: NodeProps) {
  return (
    <Shape {...DATASTORE} {...props} _style={extendStyle(DATASTORE, props)} />
  )
}
