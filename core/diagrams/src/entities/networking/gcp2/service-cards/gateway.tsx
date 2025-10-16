import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GATEWAY = {
  _style: {
    entity:
      'strokeColor=#dddddd;fillColor=#FFFFFF;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 44,
}

export function Gateway(props: DiagramNodeProps) {
  return <Shape {...GATEWAY} {...props} _style={extendStyle(GATEWAY, props)} />
}
