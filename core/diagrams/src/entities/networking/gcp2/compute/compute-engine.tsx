import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPUTE_ENGINE = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function ComputeEngine(props: NodeProps) {
  return (
    <Shape
      {...COMPUTE_ENGINE}
      {...props}
      _style={extendStyle(COMPUTE_ENGINE, props)}
    />
  )
}
