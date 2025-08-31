import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREADCRUMB_2 = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.anchor;fontSize=24;fontColor=#aaaaaa;fontStyle=1;',
  _width: 1,
  _height: 30,
}

export function Breadcrumb2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BREADCRUMB_2}
      {...props}
      _style={extendStyle(BREADCRUMB_2, props)}
    />
  )
}
