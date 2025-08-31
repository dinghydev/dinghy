import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFO_CARD = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#188C9C;html=1;whiteSpace=wrap;fillColor=#1CA5B8;fontColor=#ffffff;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _width: 0,
  _height: 180,
}

export function InfoCard(props: DiagramNodeProps) {
  return (
    <Shape {...INFO_CARD} {...props} _style={extendStyle(INFO_CARD, props)} />
  )
}
