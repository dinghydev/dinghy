import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USE_CASE_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.useCaseExtPt;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 80,
}

export function UseCase2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USE_CASE_2)} />
}
