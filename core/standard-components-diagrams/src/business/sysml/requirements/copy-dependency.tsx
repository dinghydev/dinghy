import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COPY_DEPENDENCY = {
  _style: {
    entity: 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;',
  },
  _width: 2,
  _height: 60,
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
