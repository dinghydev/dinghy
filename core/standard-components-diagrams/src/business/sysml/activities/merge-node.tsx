import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MERGE_NODE = {
  _style: {
    entity:
      'shape=rhombus;html=1;verticalLabelPosition=top;verticalAlignment=bottom;',
  },
  _original_width: 200,
  _original_height: 80,
}

export function MergeNode(props: DiagramNodeProps) {
  return (
    <Shape {...MERGE_NODE} {...props} _style={extendStyle(MERGE_NODE, props)} />
  )
}
