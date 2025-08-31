import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOTID_IDENTITY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.iotid_identity;',
  },
  _width: 47.7,
  _height: 47.7,
}

export function IotidIdentity(props: DiagramNodeProps) {
  return (
    <Shape
      {...IOTID_IDENTITY}
      {...props}
      _style={extendStyle(IOTID_IDENTITY, props)}
    />
  )
}
