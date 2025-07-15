import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING_3 = {
  _style:
    'fillColor=none;strokeColor=none;align=left;fontSize=16;fontColor=#212529;',
  _width: 4,
  _height: 110,
}

export function HorizontalFormLabelSizing3(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_FORM_LABEL_SIZING_3} {...props} />
}
