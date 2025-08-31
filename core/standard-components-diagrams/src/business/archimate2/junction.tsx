import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JUNCTION = {
  _style: {
    entity:
      'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=strokeColor',
  },
  _width: 10,
  _height: 10,
}

export function Junction(props: DiagramNodeProps) {
  return (
    <Shape {...JUNCTION} {...props} _style={extendStyle(JUNCTION, props)} />
  )
}
