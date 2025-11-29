import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_PICKER_DARK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.time_picker_dark;sketch=0;',
  },
  _width: 150,
  _height: 230,
}

export function TimePickerDark(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TIME_PICKER_DARK)} />
}
