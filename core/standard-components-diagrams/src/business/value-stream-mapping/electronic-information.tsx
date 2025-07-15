import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELECTRONIC_INFORMATION = {
  _style: 'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;',
  _width: 100,
  _height: 100,
}

export function ElectronicInformation(props: DiagramNodeProps) {
  return <Dependency {...ELECTRONIC_INFORMATION} {...props} />
}
