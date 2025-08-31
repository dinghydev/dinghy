import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_LIGHT = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#F8F9FA;fontColor=#000000;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  _width: 60,
  _height: 40,
}

export function ButtonLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_LIGHT}
      {...props}
      _style={extendStyle(BUTTON_LIGHT, props)}
    />
  )
}
