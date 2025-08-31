import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CONNECTED_INSIGHT = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_connected_insight',
  _width: 100,
  _height: 91,
}

export function CloudConnectedInsight(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CONNECTED_INSIGHT}
      {...props}
      _style={extendStyle(CLOUD_CONNECTED_INSIGHT, props)}
    />
  )
}
