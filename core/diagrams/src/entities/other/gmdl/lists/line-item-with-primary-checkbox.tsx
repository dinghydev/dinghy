import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINE_ITEM_WITH_PRIMARY_CHECKBOX = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;verticalLabelPosition=middle;align=left;verticalAlign=middle;fontSize=15;spacingLeft=72;whiteSpace=wrap;html=1;',
  },
  _width: 358,
  _height: 56,
}

export function LineItemWithPrimaryCheckbox(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, LINE_ITEM_WITH_PRIMARY_CHECKBOX)}
    />
  )
}
