import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SYNCHRO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.synchro;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Synchro(props: DiagramNodeProps) {
  return <Shape {...SYNCHRO} {...props} _style={extendStyle(SYNCHRO, props)} />
}
