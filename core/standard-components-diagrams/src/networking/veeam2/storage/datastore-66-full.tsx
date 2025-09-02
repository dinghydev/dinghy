import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATASTORE_66_FULL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.datastore_66_full;',
  },
  _original_width: 28.000000000000004,
  _original_height: 35,
}

export function Datastore66Full(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATASTORE_66_FULL}
      {...props}
      _style={extendStyle(DATASTORE_66_FULL, props)}
    />
  )
}
