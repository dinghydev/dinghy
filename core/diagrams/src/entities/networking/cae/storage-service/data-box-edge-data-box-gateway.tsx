import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_BOX_EDGE_DATA_BOX_GATEWAY = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Box_Edge_Data_Box_Gateway.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 32,
}

export function DataBoxEdgeDataBoxGateway(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DATA_BOX_EDGE_DATA_BOX_GATEWAY)}
    />
  )
}
