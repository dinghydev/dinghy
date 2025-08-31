import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BADGE_SUCCESS = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#33A64C;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=5;',
  },
  _width: 65,
  _height: 20,
}

export function BadgeSuccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...BADGE_SUCCESS}
      {...props}
      _style={extendStyle(BADGE_SUCCESS, props)}
    />
  )
}
