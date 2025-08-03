import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHIPMENTS = {
  _style: {
    dependency: 'shape=flexArrow;html=1;',
  },
}

export function Shipments(props: DiagramNodeProps) {
  return <Dependency {...SHIPMENTS} {...props} />
}
