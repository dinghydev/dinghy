import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_OFF_FOCUSED_OR_PRESSED_LIGHT = {
  _style: {
    entity:
      'shape=ellipse;labelPosition=right;align=left;strokeColor=none;fillColor=#666666;opacity=10;sketch=0;html=1;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function CheckboxOffFocusedOrPressedLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_OFF_FOCUSED_OR_PRESSED_LIGHT}
      {...props}
      _style={extendStyle(CHECKBOX_OFF_FOCUSED_OR_PRESSED_LIGHT, props)}
    />
  )
}
