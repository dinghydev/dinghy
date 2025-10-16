import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARMATURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.armature;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Armature(props: DiagramNodeProps) {
  return (
    <Shape {...ARMATURE} {...props} _style={extendStyle(ARMATURE, props)} />
  )
}
