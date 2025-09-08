import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINE_ITEM_WITH_PRIMARY_CHECKBOX = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;verticalLabelPosition=middle;align=left;verticalAlign=middle;fontSize=15;spacingLeft=72;whiteSpace=wrap;html=1;',
  },
  _original_width: 358,
  _original_height: 56,
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
