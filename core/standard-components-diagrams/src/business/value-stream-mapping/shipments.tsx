import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHIPMENTS = {
  _style: {
    dependency: 'shape=flexArrow;html=1;',
  },
}

export function Shipments(props: DiagramNodeProps) {
  return (
    <Dependency
      {...SHIPMENTS}
      {...props}
      _style={extendStyle(SHIPMENTS, props)}
    />
  )
}
