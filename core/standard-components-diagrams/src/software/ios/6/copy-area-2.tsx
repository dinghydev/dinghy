import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COPY_AREA_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.ios.rect;fillColor=#2266ff;strokeColor=none;opacity=30;sketch=0;',
  _width: 1,
  _height: 80,
}

export function CopyArea2(props: DiagramNodeProps) {
  return <Shape {...COPY_AREA_2} {...props} />
}
