import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECTMAIL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.directmail;',
  },
  _width: 52.5,
  _height: 34.8,
}

export function Directmail(props: NodeProps) {
  return (
    <Shape {...DIRECTMAIL} {...props} _style={extendStyle(DIRECTMAIL, props)} />
  )
}
