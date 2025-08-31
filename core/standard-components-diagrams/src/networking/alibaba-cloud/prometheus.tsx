import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROMETHEUS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.prometheus;',
  _width: 48.9,
  _height: 48.9,
}

export function Prometheus(props: DiagramNodeProps) {
  return (
    <Shape {...PROMETHEUS} {...props} _style={extendStyle(PROMETHEUS, props)} />
  )
}
