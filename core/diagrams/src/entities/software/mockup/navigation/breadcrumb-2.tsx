import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BREADCRUMB_2 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.anchor;fontSize=24;fontColor=#aaaaaa;fontStyle=1;',
  },
  _width: 1,
  _height: 30,
}

export function Breadcrumb2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BREADCRUMB_2)} />
}
