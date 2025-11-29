import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALIYUN_LINUX = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.aliyun_linux;',
  },
  _original_width: 52.5,
  _original_height: 52.5,
}

export function AliyunLinux(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALIYUN_LINUX)} />
}
