import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUCCESS_CARD_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#33A64C;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#33A64C;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _width: 0,
  _height: 180,
}

export function SuccessCard2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUCCESS_CARD_2}
      {...props}
      _style={extendStyle(SUCCESS_CARD_2, props)}
    />
  )
}
