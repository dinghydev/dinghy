import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SIMPLE_DIALOG_2 = {
  _style: {
    entity:
      'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontSize=20;fontColor=#000000;spacingTop=-7;spacing=20;labelPosition=center;align=left;verticalAlign=top;whiteSpace=wrap;html=1;',
  },
  _original_width: 280,
  _original_height: 250,
}

export function SimpleDialog2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIMPLE_DIALOG_2}
      {...props}
      _style={extendStyle(SIMPLE_DIALOG_2, props)}
    />
  )
}
