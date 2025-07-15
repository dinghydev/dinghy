import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPTIONAL = {
  _style:
    'html=1;shape=mxgraph.sysml.isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  _width: 0,
  _height: 100,
}

export function Optional(props: DiagramNodeProps) {
  return <Shape {...OPTIONAL} {...props} />
}
