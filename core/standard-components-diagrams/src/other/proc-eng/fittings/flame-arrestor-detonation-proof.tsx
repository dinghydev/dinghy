import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLAME_ARRESTOR_DETONATION_PROOF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flame_arrestor_(detonation-proof);',
  },
  _original_width: 100,
  _original_height: 100,
}

export function FlameArrestorDetonationProof(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLAME_ARRESTOR_DETONATION_PROOF}
      {...props}
      _style={extendStyle(FLAME_ARRESTOR_DETONATION_PROOF, props)}
    />
  )
}
