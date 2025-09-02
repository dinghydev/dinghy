import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;fontSize=12;fontColor=#212529;',
  },
  _original_width: 0,
  _original_height: 110,
}

export function HorizontalFormLabelSizing(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_LABEL_SIZING}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_LABEL_SIZING, props)}
    />
  )
}
