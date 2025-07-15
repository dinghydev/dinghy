import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION_SET_3 = {
  _style:
    'edgeStyle=none;html=1;endArrow=none;dashed=1;labelPosition=right;align=left;',
  _width: 3,
  _height: 80,
}

export function GeneralizationSet3(props: DiagramNodeProps) {
  return <Shape {...GENERALIZATION_SET_3} {...props} />
}
