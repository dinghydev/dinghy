import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARMATURE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.armature;pointerEvents=1;',
  _width: 60,
  _height: 60,
}

export function Armature(props: DiagramNodeProps) {
  return (
    <Shape {...ARMATURE} {...props} _style={extendStyle(ARMATURE, props)} />
  )
}
