import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBSEC = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mobsec;',
  },
  _width: 51,
  _height: 43.199999999999996,
}

export function Mobsec(props: DiagramNodeProps) {
  return <Shape {...MOBSEC} {...props} _style={extendStyle(MOBSEC, props)} />
}
