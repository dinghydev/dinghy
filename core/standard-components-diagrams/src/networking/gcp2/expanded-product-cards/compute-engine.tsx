import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTE_ENGINE = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 70,
}

export function ComputeEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTE_ENGINE}
      {...props}
      _style={extendStyle(COMPUTE_ENGINE, props)}
    />
  )
}
