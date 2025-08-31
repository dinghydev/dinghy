import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADDRESS_PURIFICATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.address_purification;',
  },
  _width: 50.699999999999996,
  _height: 53.7,
}

export function AddressPurification(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADDRESS_PURIFICATION}
      {...props}
      _style={extendStyle(ADDRESS_PURIFICATION, props)}
    />
  )
}
