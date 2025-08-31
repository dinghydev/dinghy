import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COREGION = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.coregion;strokeWidth=3;',
  },
  _width: 1,
  _height: 220,
}

export function Coregion(props: DiagramNodeProps) {
  return (
    <Shape {...COREGION} {...props} _style={extendStyle(COREGION, props)} />
  )
}
