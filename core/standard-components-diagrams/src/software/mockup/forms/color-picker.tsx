import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLOR_PICKER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.forms.colorPicker;chosenColor=#aaddff;',
  _width: 40,
  _height: 40,
}

export function ColorPicker(props: DiagramNodeProps) {
  return <Shape {...COLOR_PICKER} {...props} />
}
