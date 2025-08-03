import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUAL_INFORMATION = {
  _style: {
    dependency: 'shape=mxgraph.lean_mapping.manual_info_flow_edge;html=1;',
  },
}

export function ManualInformation(props: DiagramNodeProps) {
  return <Dependency {...MANUAL_INFORMATION} {...props} />
}
