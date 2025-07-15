import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COREGION = {
  _style: 'html=1;shape=mxgraph.sysml.coregion;strokeWidth=3;',
  _width: 1,
  _height: 220,
}

export function Coregion(props: DiagramNodeProps) {
  return <Shape {...COREGION} {...props} />
}
