import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTRONIC_INFORMATION = {
  _style: {
    dependency: 'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;',
  },
}

export function ElectronicInformation(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, ELECTRONIC_INFORMATION)}
    />
  )
}
