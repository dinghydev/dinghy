import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING = {
  _style:
    'fillColor=none;strokeColor=none;align=left;fontSize=12;fontColor=#212529;',
  _width: 0,
  _height: 110,
}

export function HorizontalFormLabelSizing(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_FORM_LABEL_SIZING} {...props} />
}
