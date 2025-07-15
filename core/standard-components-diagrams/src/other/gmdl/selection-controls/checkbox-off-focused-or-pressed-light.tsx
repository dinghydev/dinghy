import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECKBOX_OFF_FOCUSED_OR_PRESSED_LIGHT = {
  _style:
    'shape=ellipse;labelPosition=right;align=left;strokeColor=none;fillColor=#666666;opacity=10;sketch=0;html=1;',
  _width: 0,
  _height: 48,
}

export function CheckboxOffFocusedOrPressedLight(props: DiagramNodeProps) {
  return <Shape {...CHECKBOX_OFF_FOCUSED_OR_PRESSED_LIGHT} {...props} />
}
