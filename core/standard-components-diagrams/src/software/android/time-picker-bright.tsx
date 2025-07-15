import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_PICKER_BRIGHT = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.time_picker;sketch=0;',
  _width: 150,
  _height: 230,
}

export function TimePickerBright(props: DiagramNodeProps) {
  return <Shape {...TIME_PICKER_BRIGHT} {...props} />
}
