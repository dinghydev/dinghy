import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECTMAIL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.directmail;',
  },
  _original_width: 52.5,
  _original_height: 34.8,
}

export function Directmail(props: DiagramNodeProps) {
  return (
    <Shape {...DIRECTMAIL} {...props} _style={extendStyle(DIRECTMAIL, props)} />
  )
}
