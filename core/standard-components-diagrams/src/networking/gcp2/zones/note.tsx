import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTE = {
  _style: {
    entity:
      'strokeColor=none;shadow=0;gradientColor=none;fontSize=11;align=left;spacing=10;fontColor=#;9E9E9E;verticalAlign=top;spacingTop=100;whiteSpace=wrap;html=1;fillColor=#ffffff;',
  },
  _original_width: 300,
  _original_height: 350,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} _style={extendStyle(NOTE, props)} />
}
