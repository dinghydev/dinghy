import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECONDARY_CARD = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#5B646A;html=1;whiteSpace=wrap;fillColor=#6C767D;fontColor=#ffffff;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _width: 0,
  _height: 180,
}

export function SecondaryCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECONDARY_CARD}
      {...props}
      _style={extendStyle(SECONDARY_CARD, props)}
    />
  )
}
