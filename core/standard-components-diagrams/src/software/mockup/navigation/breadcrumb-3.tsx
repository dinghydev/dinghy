import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BREADCRUMB_3 = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.anchor;fontSize=17;fontColor=#008cff;fontStyle=1;',
  _width: 6,
  _height: 30,
}

export function Breadcrumb3(props: DiagramNodeProps) {
  return <Shape {...BREADCRUMB_3} {...props} />
}
