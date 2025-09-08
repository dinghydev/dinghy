import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECKBOX_ON_FOCUSED_OR_PRESSED = {
  _style: {
    entity:
      'shape=ellipse;labelPosition=right;align=left;strokeColor=none;fillColor=#009587;opacity=10;sketch=0;html=1;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function CheckboxOnFocusedOrPressed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_ON_FOCUSED_OR_PRESSED}
      {...props}
      _style={extendStyle(CHECKBOX_ON_FOCUSED_OR_PRESSED, props)}
    />
  )
}
