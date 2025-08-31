import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_PRIMARY_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#0085FC;strokeWidth=1;fillColor=none;fontColor=#0085FC;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 80,
  _height: 40,
}

export function ButtonPrimary2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_PRIMARY_2}
      {...props}
      _style={extendStyle(BUTTON_PRIMARY_2, props)}
    />
  )
}
