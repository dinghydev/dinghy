import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBERED_LIST_4 = {
  _style:
    'shape=rect;rounded=1;whiteSpace=wrap;html=1;shadow=0;strokeColor=none;fillColor=#F08E81;arcSize=30;fontSize=14;spacingLeft=42;fontStyle=1;fontColor=#FFFFFF;align=left;',
  _width: 4,
  _height: 320,
}

export function NumberedList4(props: DiagramNodeProps) {
  return (
    <Shape
      {...NUMBERED_LIST_4}
      {...props}
      _style={extendStyle(NUMBERED_LIST_4, props)}
    />
  )
}
