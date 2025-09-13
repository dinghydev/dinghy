import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BADGE_INFO = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#1CA5B8;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=5;',
  },
  _width: 35,
  _height: 20,
}

export function BadgeInfo(props: DiagramNodeProps) {
  return (
    <Shape {...BADGE_INFO} {...props} _style={extendStyle(BADGE_INFO, props)} />
  )
}
