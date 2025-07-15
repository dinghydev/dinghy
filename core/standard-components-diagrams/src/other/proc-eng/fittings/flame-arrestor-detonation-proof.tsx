import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLAME_ARRESTOR_DETONATION_PROOF = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flame_arrestor_(detonation-proof);',
  _width: 100,
  _height: 100,
}

export function FlameArrestorDetonationProof(props: DiagramNodeProps) {
  return <Shape {...FLAME_ARRESTOR_DETONATION_PROOF} {...props} />
}
