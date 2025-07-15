import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHIPMENTS = {
  _style: 'shape=flexArrow;html=1;',
  _width: 100,
  _height: 100,
}

export function Shipments(props: DiagramNodeProps) {
  return <Dependency {...SHIPMENTS} {...props} />
}
