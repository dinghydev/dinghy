import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DANGER_CARD = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#BA2239;html=1;whiteSpace=wrap;fillColor=#DB2843;fontColor=#ffffff;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _width: 0,
  _height: 180,
}

export function DangerCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...DANGER_CARD}
      {...props}
      _style={extendStyle(DANGER_CARD, props)}
    />
  )
}
