import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECK_YELLOW = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#F4AF20;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check',
  },
  _original_width: 100,
  _original_height: 80,
}

export function CheckYellow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECK_YELLOW}
      {...props}
      _style={extendStyle(CHECK_YELLOW, props)}
    />
  )
}
