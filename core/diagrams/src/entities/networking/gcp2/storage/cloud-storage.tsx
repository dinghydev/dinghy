import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_STORAGE = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function CloudStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_STORAGE}
      {...props}
      _style={extendStyle(CLOUD_STORAGE, props)}
    />
  )
}
