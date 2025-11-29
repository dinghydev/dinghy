import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ON_OFF_BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.buttons.onOffButton;gradientColor=none;strokeColor=#999999;buttonState=on;fillColor2=#008cff;fontColor=#ffffff;fontSize=17;mainText=;spacingRight=40;fontStyle=1;whiteSpace=wrap;',
  },
  _width: 150,
  _height: 50,
}

export function OnOffButton(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ON_OFF_BUTTON)} />
}
