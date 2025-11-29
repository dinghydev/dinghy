import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OTS_TABLESTORE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ots_tablestore;',
  },
  _original_width: 53.1,
  _original_height: 42.599999999999994,
}

export function OtsTablestore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OTS_TABLESTORE)} />
}
