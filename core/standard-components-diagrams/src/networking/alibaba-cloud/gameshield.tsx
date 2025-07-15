import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAMESHIELD = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gameshield;',
  _width: 51.3,
  _height: 44.4,
}

export function Gameshield(props: DiagramNodeProps) {
  return <Shape {...GAMESHIELD} {...props} />
}
