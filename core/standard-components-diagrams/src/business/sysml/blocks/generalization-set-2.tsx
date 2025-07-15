import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION_SET_2 = {
  _style: 'edgeStyle=none;html=1;endArrow=block;endFill=0;endSize=12;',
  _width: 150,
  _height: 80,
}

export function GeneralizationSet2(props: DiagramNodeProps) {
  return <Shape {...GENERALIZATION_SET_2} {...props} />
}
