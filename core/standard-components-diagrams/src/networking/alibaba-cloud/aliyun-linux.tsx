import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALIYUN_LINUX = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.aliyun_linux;',
  _width: 60,
  _height: 60,
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
