import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DERIVE_DEPENDENCY = {
  _style: {
    entity: 'endArrow=open;html=1;edgeStyle=none;endSize=12;dashed=1;',
  },
  _original_width: 2,
  _original_height: 60,
}

export function DeriveDependency(props: DiagramNodeProps) {
  return (
    <Shape
      {...DERIVE_DEPENDENCY}
      {...props}
      _style={extendStyle(DERIVE_DEPENDENCY, props)}
    />
  )
}
