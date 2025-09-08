import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACKED_RADIO_BUTTONS = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.radioButton2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=1;spacing=5;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  },
  _original_width: 0,
  _original_height: 50,
}

export function StackedRadioButtons(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKED_RADIO_BUTTONS}
      {...props}
      _style={extendStyle(STACKED_RADIO_BUTTONS, props)}
    />
  )
}
