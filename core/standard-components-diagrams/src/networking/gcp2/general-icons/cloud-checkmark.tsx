import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CHECKMARK = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_checkmark',
  _width: 100,
  _height: 67,
}

export function CloudCheckmark(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CHECKMARK}
      {...props}
      _style={extendStyle(CLOUD_CHECKMARK, props)}
    />
  )
}
