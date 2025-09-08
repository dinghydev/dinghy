import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.database_generic',
  },
  _original_width: 37,
  _original_height: 50,
}

export function DatabaseGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_GENERIC}
      {...props}
      _style={extendStyle(DATABASE_GENERIC, props)}
    />
  )
}
