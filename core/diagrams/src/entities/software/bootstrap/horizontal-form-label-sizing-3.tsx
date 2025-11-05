import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;fontSize=16;fontColor=#212529;',
  },
  _width: 4,
  _height: 110,
}

export function HorizontalFormLabelSizing3(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_LABEL_SIZING_3}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_LABEL_SIZING_3, props)}
    />
  )
}
