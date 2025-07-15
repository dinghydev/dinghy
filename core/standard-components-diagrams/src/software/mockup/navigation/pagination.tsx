import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PAGINATION = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.pagination;linkText=;fontSize=17;fontColor=#0000ff;fontStyle=4;',
  _width: 350,
  _height: 30,
}

export function Pagination(props: DiagramNodeProps) {
  return <Shape {...PAGINATION} {...props} />
}
