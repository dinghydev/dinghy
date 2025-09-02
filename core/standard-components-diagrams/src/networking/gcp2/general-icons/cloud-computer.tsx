import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_COMPUTER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_computer',
  },
  _original_width: 100,
  _original_height: 88,
}

export function CloudComputer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_COMPUTER}
      {...props}
      _style={extendStyle(CLOUD_COMPUTER, props)}
    />
  )
}
