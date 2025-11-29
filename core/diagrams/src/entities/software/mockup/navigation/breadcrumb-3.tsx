import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BREADCRUMB_3 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.navigation.anchor;fontSize=17;fontColor=#008cff;fontStyle=1;',
  },
  _width: 6,
  _height: 30,
}

export function Breadcrumb3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BREADCRUMB_3)} />
}
