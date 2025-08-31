import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTRONIC_INFORMATION = {
  _style: {
    dependency: 'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;',
  },
}

export function ElectronicInformation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ELECTRONIC_INFORMATION}
      {...props}
      _style={extendStyle(ELECTRONIC_INFORMATION, props)}
    />
  )
}
