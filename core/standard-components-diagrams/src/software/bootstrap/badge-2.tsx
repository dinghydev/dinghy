import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BADGE_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#0085FC;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;fontStyle=0;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 40,
}

export function Badge2(props: DiagramNodeProps) {
  return <Shape {...BADGE_2} {...props} _style={extendStyle(BADGE_2, props)} />
}
