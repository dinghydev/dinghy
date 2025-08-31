import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCREEN_NAME_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iScreenNameBar;fillColor2=#000000;fillColor3=#ffffff;buttonText=;fontColor=#ffffff;fontSize=10;whiteSpace=wrap;align=center;sketch=0;',
  },
  _width: 174,
  _height: 25,
}

export function ScreenNameBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCREEN_NAME_BAR}
      {...props}
      _style={extendStyle(SCREEN_NAME_BAR, props)}
    />
  )
}
