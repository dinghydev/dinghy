import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINE_ITEM_WITH_PRIMARY_CHECKBOX = {
  _style:
    'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;verticalLabelPosition=middle;align=left;verticalAlign=middle;fontSize=15;spacingLeft=72;whiteSpace=wrap;html=1;',
  _width: 358,
  _height: 56,
}

export function LineItemWithPrimaryCheckbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...LINE_ITEM_WITH_PRIMARY_CHECKBOX}
      {...props}
      _style={extendStyle(LINE_ITEM_WITH_PRIMARY_CHECKBOX, props)}
    />
  )
}
