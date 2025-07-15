import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK_2 = {
  _style: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.check2',
  _width: 100,
  _height: 50,
}

export function Check2(props: DiagramNodeProps) {
  return <Shape {...CHECK_2} {...props} />
}
