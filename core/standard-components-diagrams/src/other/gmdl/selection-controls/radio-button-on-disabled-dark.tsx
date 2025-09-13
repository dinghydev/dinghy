import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RADIO_BUTTON_ON_DISABLED_DARK = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.radiobutton;strokeColor=#676767;fillColor=#676767;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _width: 0,
  _height: 16,
}

export function RadioButtonOnDisabledDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_BUTTON_ON_DISABLED_DARK}
      {...props}
      _style={extendStyle(RADIO_BUTTON_ON_DISABLED_DARK, props)}
    />
  )
}
