import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALIYUN_LINUX = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.aliyun_linux;',
  },
  _original_width: 52.5,
  _original_height: 52.5,
}

export function AliyunLinux(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALIYUN_LINUX}
      {...props}
      _style={extendStyle(ALIYUN_LINUX, props)}
    />
  )
}
