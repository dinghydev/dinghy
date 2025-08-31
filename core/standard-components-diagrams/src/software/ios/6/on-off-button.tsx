import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_OFF_BUTTON = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iOnOffButton;mainText=;strokeColor=#444444;fontSize=9;fontColor=#ffffff;spacingRight=14;buttonState=on;sketch=0;',
  _width: 43.5,
  _height: 15,
}

export function OnOffButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_OFF_BUTTON}
      {...props}
      _style={extendStyle(ON_OFF_BUTTON, props)}
    />
  )
}
