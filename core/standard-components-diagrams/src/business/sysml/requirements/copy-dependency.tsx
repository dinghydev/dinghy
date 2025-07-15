import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COPY_DEPENDENCY = {
  _style: 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;',
  _width: 2,
  _height: 60,
}

export function CopyDependency(props: DiagramNodeProps) {
  return <Shape {...COPY_DEPENDENCY} {...props} />
}
