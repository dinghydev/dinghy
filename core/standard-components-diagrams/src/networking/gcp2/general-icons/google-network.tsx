import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE_NETWORK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.google_network',
  },
  _width: 60,
  _height: 60,
}

export function GoogleNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOOGLE_NETWORK}
      {...props}
      _style={extendStyle(GOOGLE_NETWORK, props)}
    />
  )
}
