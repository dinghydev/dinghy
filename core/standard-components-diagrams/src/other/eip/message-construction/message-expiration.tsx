import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_EXPIRATION = {
  _style: {
    entity:
      'strokeWidth=3;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.messExp;html=1;verticalLabelPosition=bottom;verticalAlign=top',
  },
  _original_width: 48,
  _original_height: 48,
}

export function MessageExpiration(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_EXPIRATION}
      {...props}
      _style={extendStyle(MESSAGE_EXPIRATION, props)}
    />
  )
}
