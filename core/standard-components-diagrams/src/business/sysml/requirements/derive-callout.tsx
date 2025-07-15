import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DERIVE_CALLOUT = {
  _style: 'endArrow=none;edgeStyle=none;dashed=1;html=1;',
  _width: 2,
  _height: 60,
}

export function DeriveCallout(props: DiagramNodeProps) {
  return <Shape {...DERIVE_CALLOUT} {...props} />
}
