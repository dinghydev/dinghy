import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ETHERGRID = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/EtherGRID.svg;strokeColor=none;',
  },
  _width: 89.4,
  _height: 64.80000000000001,
}

export function Ethergrid(props: NodeProps) {
  return (
    <Shape {...ETHERGRID} {...props} _style={extendStyle(ETHERGRID, props)} />
  )
}
