import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BADGE_DANGER = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#DB2843;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=5;',
  },
  _width: 60,
  _height: 20,
}

export function BadgeDanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...BADGE_DANGER}
      {...props}
      _style={extendStyle(BADGE_DANGER, props)}
    />
  )
}
