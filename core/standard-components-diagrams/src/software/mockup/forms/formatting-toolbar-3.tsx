import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORMATTING_TOOLBAR_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.menus_and_buttons.font_style_selector_3;',
  },
  _original_width: 176,
  _original_height: 38,
}

export function FormattingToolbar3(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORMATTING_TOOLBAR_3}
      {...props}
      _style={extendStyle(FORMATTING_TOOLBAR_3, props)}
    />
  )
}
