import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINTENANCE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.maintenance;',
  },
  _original_width: 39,
  _original_height: 56,
}

export function Maintenance(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAINTENANCE}
      {...props}
      _style={extendStyle(MAINTENANCE, props)}
    />
  )
}
