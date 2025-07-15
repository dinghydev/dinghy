import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BREADCRUMB = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.anchor;fontSize=17;fontColor=#666666;fontStyle=1;',
  _width: 300,
  _height: 30,
}

export function Breadcrumb(props: DiagramNodeProps) {
  return <Shape {...BREADCRUMB} {...props} />
}
