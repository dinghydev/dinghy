import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PAGINATION = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.pagination;linkText=;fontSize=17;fontColor=#0000ff;fontStyle=4;',
  },
  _width: 350,
  _height: 30,
}

export function Pagination(props: NodeProps) {
  return (
    <Shape {...PAGINATION} {...props} _style={extendStyle(PAGINATION, props)} />
  )
}
