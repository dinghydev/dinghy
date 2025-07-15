import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.sun',
  _width: 100,
  _height: 100,
}

export function Sun(props: DiagramNodeProps) {
  return <Shape {...SUN} {...props} />
}
