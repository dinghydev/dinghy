import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLOR_PICKER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.forms.colorPicker;chosenColor=#aaddff;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function ColorPicker(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLOR_PICKER}
      {...props}
      _style={extendStyle(COLOR_PICKER, props)}
    />
  )
}
