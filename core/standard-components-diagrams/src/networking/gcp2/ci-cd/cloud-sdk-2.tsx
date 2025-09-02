import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SDK_2 = {
  _style: {
    entity:
      'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 68,
}

export function CloudSdk2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SDK_2}
      {...props}
      _style={extendStyle(CLOUD_SDK_2, props)}
    />
  )
}
