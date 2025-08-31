import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIALOG_WITH_SCROLLABLE_LIST = {
  _style: {
    entity:
      'shape=rect;fontSize=18;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 280,
  _height: 270,
}

export function DialogWithScrollableList(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIALOG_WITH_SCROLLABLE_LIST}
      {...props}
      _style={extendStyle(DIALOG_WITH_SCROLLABLE_LIST, props)}
    />
  )
}
