import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECK_AVAILABLE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check_available',
  },
  _original_width: 100,
  _original_height: 87,
}

export function CheckAvailable(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECK_AVAILABLE}
      {...props}
      _style={extendStyle(CHECK_AVAILABLE, props)}
    />
  )
}
