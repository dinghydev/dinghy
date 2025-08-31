import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACKED_RADIO_BUTTONS_3 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.radioButton2;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;gradientColor=#DEDEDE;fillColor=#EDEDED;checked=0;spacing=5;fontColor=#6C767D;checkedFill=#0085FC;checkedStroke=#ffffff;sketch=0;',
  _width: 2,
  _height: 50,
}

export function StackedRadioButtons3(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKED_RADIO_BUTTONS_3}
      {...props}
      _style={extendStyle(STACKED_RADIO_BUTTONS_3, props)}
    />
  )
}
