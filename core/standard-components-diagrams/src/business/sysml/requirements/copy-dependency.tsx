import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPY_DEPENDENCY = {
  _style: {
    entity: 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;',
  },
  _original_width: 2,
  _original_height: 60,
}

export function CopyDependency(props: DiagramNodeProps) {
  return (
    <Shape
      {...COPY_DEPENDENCY}
      {...props}
      _style={extendStyle(COPY_DEPENDENCY, props)}
    />
  )
}
