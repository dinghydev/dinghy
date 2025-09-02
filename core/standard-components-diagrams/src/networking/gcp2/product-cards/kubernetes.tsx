import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KUBERNETES = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function Kubernetes(props: DiagramNodeProps) {
  return (
    <Shape {...KUBERNETES} {...props} _style={extendStyle(KUBERNETES, props)} />
  )
}
