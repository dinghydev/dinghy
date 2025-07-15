import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MERGE_OR_STORAGE = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.merge_or_storage;whiteSpace=wrap;',
  _width: 95,
  _height: 60,
}

export function MergeOrStorage(props: DiagramNodeProps) {
  return <Shape {...MERGE_OR_STORAGE} {...props} />
}
