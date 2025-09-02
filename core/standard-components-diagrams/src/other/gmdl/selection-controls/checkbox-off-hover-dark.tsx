import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_OFF_HOVER_DARK = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.checkbox;strokeColor=#ffffff;fillColor=none;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _original_width: 0,
  _original_height: 16,
}

export function CheckboxOffHoverDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_OFF_HOVER_DARK}
      {...props}
      _style={extendStyle(CHECKBOX_OFF_HOVER_DARK, props)}
    />
  )
}
