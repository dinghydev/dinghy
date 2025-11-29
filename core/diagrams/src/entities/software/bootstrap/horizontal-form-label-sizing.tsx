import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;fontSize=12;fontColor=#212529;',
  },
  _width: 0,
  _height: 110,
}

export function HorizontalFormLabelSizing(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, HORIZONTAL_FORM_LABEL_SIZING)}
    />
  )
}
