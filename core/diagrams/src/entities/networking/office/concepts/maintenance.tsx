import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAINTENANCE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.maintenance;',
  },
  _width: 39,
  _height: 56,
}

export function Maintenance(props: NodeProps) {
  return (
    <Shape
      {...MAINTENANCE}
      {...props}
      _style={extendStyle(MAINTENANCE, props)}
    />
  )
}
