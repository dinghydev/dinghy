import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEEP_DRY = {
  _style:
    'shape=mxgraph.signs.safety.keep_dry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 83,
  _height: 99,
}

export function KeepDry(props: DiagramNodeProps) {
  return <Shape {...KEEP_DRY} {...props} />
}
