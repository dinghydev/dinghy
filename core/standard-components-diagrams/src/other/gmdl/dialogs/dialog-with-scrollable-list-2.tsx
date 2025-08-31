import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIALOG_WITH_SCROLLABLE_LIST_2 = {
  _style:
    'shape=rect;fontSize=18;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontSize=17;fontColor=#666666;align=left;spacing=16;align=left;verticalAlign=top;whiteSpace=wrap;html=1;',
  _width: 280,
  _height: 112,
}

export function DialogWithScrollableList2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIALOG_WITH_SCROLLABLE_LIST_2}
      {...props}
      _style={extendStyle(DIALOG_WITH_SCROLLABLE_LIST_2, props)}
    />
  )
}
