import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVITY = {
  _style: 'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;',
  _width: 160,
  _height: 0,
}

export function Activity(props: DiagramNodeProps) {
  return <Dependency {...ACTIVITY} {...props} />
}
