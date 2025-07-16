import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORMATTING_TOOLBAR_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.menus_and_buttons.font_style_selector_2;',
  _width: 235,
  _height: 31,
}

export function FormattingToolbar2(props: DiagramNodeProps) {
  return <Shape {...FORMATTING_TOOLBAR_2} {...props} />
}
