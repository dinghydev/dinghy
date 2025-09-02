import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREADCRUMB_3 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.anchor;fontSize=17;fontColor=#008cff;fontStyle=1;',
  },
  _original_width: 6,
  _original_height: 30,
}

export function Breadcrumb3(props: DiagramNodeProps) {
  return (
    <Shape
      {...BREADCRUMB_3}
      {...props}
      _style={extendStyle(BREADCRUMB_3, props)}
    />
  )
}
