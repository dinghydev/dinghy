import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTERNAL_ENTITY = {
  _style: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.externalEntity',
  _width: 0,
  _height: 100,
}

export function ExternalEntity(props: DiagramNodeProps) {
  return <Shape {...EXTERNAL_ENTITY} {...props} />
}
