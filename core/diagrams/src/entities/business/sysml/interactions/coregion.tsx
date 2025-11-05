import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COREGION = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.coregion;strokeWidth=3;',
  },
  _width: 1,
  _height: 220,
}

export function Coregion(props: NodeProps) {
  return (
    <Shape {...COREGION} {...props} _style={extendStyle(COREGION, props)} />
  )
}
