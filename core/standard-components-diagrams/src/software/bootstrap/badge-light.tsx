import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BADGE_LIGHT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#F8F9FA;fontColor=#000000;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=5;',
  },
  _original_width: 45,
  _original_height: 20,
}

export function BadgeLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...BADGE_LIGHT}
      {...props}
      _style={extendStyle(BADGE_LIGHT, props)}
    />
  )
}
