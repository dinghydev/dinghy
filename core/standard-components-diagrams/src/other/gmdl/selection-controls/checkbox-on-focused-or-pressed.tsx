import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECKBOX_ON_FOCUSED_OR_PRESSED = {
  _style:
    'shape=ellipse;labelPosition=right;align=left;strokeColor=none;fillColor=#009587;opacity=10;sketch=0;html=1;',
  _width: 0,
  _height: 48,
}

export function CheckboxOnFocusedOrPressed(props: DiagramNodeProps) {
  return <Shape {...CHECKBOX_ON_FOCUSED_OR_PRESSED} {...props} />
}
