import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IOT_CORE = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function IotCore(props: DiagramNodeProps) {
  return (
    <Shape {...IOT_CORE} {...props} _style={extendStyle(IOT_CORE, props)} />
  )
}
