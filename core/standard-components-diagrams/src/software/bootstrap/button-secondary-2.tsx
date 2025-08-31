import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_SECONDARY_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#6C767D;strokeWidth=1;fillColor=none;fontColor=#6C767D;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 100,
  _height: 40,
}

export function ButtonSecondary2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SECONDARY_2}
      {...props}
      _style={extendStyle(BUTTON_SECONDARY_2, props)}
    />
  )
}
