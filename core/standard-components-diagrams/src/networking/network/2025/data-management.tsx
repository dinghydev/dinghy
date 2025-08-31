import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_MANAGEMENT = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.data_management;network2IconW=0.8252;network2IconH=0.9989;',
  },
  _width: 41.260000000000005,
  _height: 49.945,
}

export function DataManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_MANAGEMENT}
      {...props}
      _style={extendStyle(DATA_MANAGEMENT, props)}
    />
  )
}
