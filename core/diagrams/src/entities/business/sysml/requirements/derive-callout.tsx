import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DERIVE_CALLOUT = {
  _style: {
    entity: 'endArrow=none;edgeStyle=none;dashed=1;html=1;',
  },
  _width: 2,
  _height: 60,
}

export function DeriveCallout(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DERIVE_CALLOUT)} />
}
