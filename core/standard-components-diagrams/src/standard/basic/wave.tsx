import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAVE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.wave2;dy=0.3;',
  _width: 100,
  _height: 60,
}

export function Wave(props: DiagramNodeProps) {
  return <Shape {...WAVE} {...props} />
}
