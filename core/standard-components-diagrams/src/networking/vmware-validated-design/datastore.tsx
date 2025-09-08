import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATASTORE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.datastore;',
  },
  _original_width: 50,
  _original_height: 39,
}

export function Datastore(props: DiagramNodeProps) {
  return (
    <Shape {...DATASTORE} {...props} _style={extendStyle(DATASTORE, props)} />
  )
}
