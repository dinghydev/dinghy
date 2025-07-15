import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MERGE_NODE = {
  _style:
    'shape=rhombus;html=1;verticalLabelPosition=top;verticalAlignment=bottom;',
  _width: 200,
  _height: 80,
}

export function MergeNode(props: DiagramNodeProps) {
  return <Shape {...MERGE_NODE} {...props} />
}
