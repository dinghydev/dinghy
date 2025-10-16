import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NLS_ASRBAG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nls-asrbag;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function NlsAsrbag(props: DiagramNodeProps) {
  return (
    <Shape {...NLS_ASRBAG} {...props} _style={extendStyle(NLS_ASRBAG, props)} />
  )
}
