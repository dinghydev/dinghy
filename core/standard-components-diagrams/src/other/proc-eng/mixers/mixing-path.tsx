import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MIXING_PATH = {
  _style:
    'shape=mxgraph.pid.mixers.mixing_path;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 260,
  _height: 100,
}

export function MixingPath(props: DiagramNodeProps) {
  return <Shape {...MIXING_PATH} {...props} />
}
