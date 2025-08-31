import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MERGE_OR_STORAGE = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.merge_or_storage;whiteSpace=wrap;',
  _width: 95,
  _height: 60,
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
