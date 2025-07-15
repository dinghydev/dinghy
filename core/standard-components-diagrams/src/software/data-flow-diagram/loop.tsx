import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOOP = {
  _style: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.loop',
  _width: 80,
  _height: 30,
}

export function Loop(props: DiagramNodeProps) {
  return <Shape {...LOOP} {...props} />
}
