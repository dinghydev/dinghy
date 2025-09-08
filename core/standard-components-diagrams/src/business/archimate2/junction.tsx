import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JUNCTION = {
  _style: {
    entity:
      'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=strokeColor',
  },
  _original_width: 10,
  _original_height: 10,
}

export function Junction(props: DiagramNodeProps) {
  return (
    <Shape {...JUNCTION} {...props} _style={extendStyle(JUNCTION, props)} />
  )
}
