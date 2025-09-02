import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDPHOTO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloudphoto;',
  },
  _original_width: 45,
  _original_height: 45,
}

export function Cloudphoto(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDPHOTO} {...props} _style={extendStyle(CLOUDPHOTO, props)} />
  )
}
