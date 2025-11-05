import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADDRESS_PURIFICATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.address_purification;',
  },
  _original_width: 50.699999999999996,
  _original_height: 53.7,
}

export function AddressPurification(props: NodeProps) {
  return (
    <Shape
      {...ADDRESS_PURIFICATION}
      {...props}
      _style={extendStyle(ADDRESS_PURIFICATION, props)}
    />
  )
}
