import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BADGE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;fontStyle=1;fontSize=18;',
  },
  _width: 60,
  _height: 40,
}

export function Badge(props: DiagramNodeProps) {
  return <Shape {...BADGE} {...props} _style={extendStyle(BADGE, props)} />
}
