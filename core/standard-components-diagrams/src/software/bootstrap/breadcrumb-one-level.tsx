import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREADCRUMB_ONE_LEVEL = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#E9ECEF;fontColor=#6C757D;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=14;spacing=10;',
  },
  _width: 800,
  _height: 40,
}

export function BreadcrumbOneLevel(props: DiagramNodeProps) {
  return (
    <Shape
      {...BREADCRUMB_ONE_LEVEL}
      {...props}
      _style={extendStyle(BREADCRUMB_ONE_LEVEL, props)}
    />
  )
}
