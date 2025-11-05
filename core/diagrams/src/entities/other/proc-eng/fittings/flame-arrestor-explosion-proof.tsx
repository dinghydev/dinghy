import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLAME_ARRESTOR_EXPLOSION_PROOF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flame_arrestor_(explosion-proof);',
  },
  _original_width: 100,
  _original_height: 100,
}

export function FlameArrestorExplosionProof(props: NodeProps) {
  return (
    <Shape
      {...FLAME_ARRESTOR_EXPLOSION_PROOF}
      {...props}
      _style={extendStyle(FLAME_ARRESTOR_EXPLOSION_PROOF, props)}
    />
  )
}
