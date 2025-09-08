import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COREGION = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.coregion;strokeWidth=3;',
  },
  _original_width: 1,
  _original_height: 220,
}

export function Coregion(props: DiagramNodeProps) {
  return (
    <Shape {...COREGION} {...props} _style={extendStyle(COREGION, props)} />
  )
}
