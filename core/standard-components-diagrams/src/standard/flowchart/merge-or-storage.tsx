import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MERGE_OR_STORAGE = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.merge_or_storage;whiteSpace=wrap;',
  },
  _original_width: 95,
  _original_height: 60,
}

export function MergeOrStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...MERGE_OR_STORAGE}
      {...props}
      _style={extendStyle(MERGE_OR_STORAGE, props)}
    />
  )
}
