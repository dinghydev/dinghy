import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_SDK = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function CloudSdk(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD_SDK} {...props} _style={extendStyle(CLOUD_SDK, props)} />
  )
}
