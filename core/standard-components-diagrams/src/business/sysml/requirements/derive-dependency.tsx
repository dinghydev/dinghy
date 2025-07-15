import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DERIVE_DEPENDENCY = {
  _style: 'endArrow=open;html=1;edgeStyle=none;endSize=12;dashed=1;',
  _width: 2,
  _height: 60,
}

export function DeriveDependency(props: DiagramNodeProps) {
  return <Shape {...DERIVE_DEPENDENCY} {...props} />
}
