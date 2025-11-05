import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KUBERNETES = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function Kubernetes(props: NodeProps) {
  return (
    <Shape {...KUBERNETES} {...props} _style={extendStyle(KUBERNETES, props)} />
  )
}
