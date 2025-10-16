import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVITY = {
  _style: {
    dependency: 'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;',
  },
}

export function Activity(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ACTIVITY}
      {...props}
      _style={extendStyle(ACTIVITY, props)}
    />
  )
}
