import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARMATURE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.armature;pointerEvents=1;',
  _width: 100,
  _height: 100,
}

export function Armature(props: DiagramNodeProps) {
  return <Shape {...ARMATURE} {...props} />
}
