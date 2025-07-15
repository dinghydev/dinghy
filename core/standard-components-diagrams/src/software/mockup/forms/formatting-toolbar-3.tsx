import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORMATTING_TOOLBAR_3 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.menus_and_buttons.font_style_selector_3;',
  _width: 176,
  _height: 38,
}

export function FormattingToolbar3(props: DiagramNodeProps) {
  return <Shape {...FORMATTING_TOOLBAR_3} {...props} />
}
