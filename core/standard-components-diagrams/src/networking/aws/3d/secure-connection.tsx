import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURE_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.secureConnection;fillColor=#000000;strokeColor=#ffffff;aspect=fixed;',
  },
  _original_width: 56.99999999999999,
  _original_height: 34,
}

export function SecureConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_CONNECTION}
      {...props}
      _style={extendStyle(SECURE_CONNECTION, props)}
    />
  )
}
