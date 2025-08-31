import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BADGE_SECONDARY = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=5;',
  _width: 80,
  _height: 20,
}

export function BadgeSecondary(props: DiagramNodeProps) {
  return (
    <Shape
      {...BADGE_SECONDARY}
      {...props}
      _style={extendStyle(BADGE_SECONDARY, props)}
    />
  )
}
