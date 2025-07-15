import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALIYUN_LINUX = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.aliyun_linux;',
  _width: 52.5,
  _height: 52.5,
}

export function AliyunLinux(props: DiagramNodeProps) {
  return <Shape {...ALIYUN_LINUX} {...props} />
}
