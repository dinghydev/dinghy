import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPERMARKET = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.supermarket;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function Supermarket(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPERMARKET}
      {...props}
      _style={extendStyle(SUPERMARKET, props)}
    />
  )
}
