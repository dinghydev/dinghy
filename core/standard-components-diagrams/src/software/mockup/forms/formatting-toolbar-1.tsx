import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORMATTING_TOOLBAR_1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.menus_and_buttons.font_style_selector_1;',
  },
  _width: 136,
  _height: 31,
}

export function FormattingToolbar1(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORMATTING_TOOLBAR_1}
      {...props}
      _style={extendStyle(FORMATTING_TOOLBAR_1, props)}
    />
  )
}
