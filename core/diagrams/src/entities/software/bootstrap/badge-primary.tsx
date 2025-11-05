import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BADGE_PRIMARY = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#0085FC;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=5;',
  },
  _width: 60,
  _height: 20,
}

export function BadgePrimary(props: NodeProps) {
  return (
    <Shape
      {...BADGE_PRIMARY}
      {...props}
      _style={extendStyle(BADGE_PRIMARY, props)}
    />
  )
}
