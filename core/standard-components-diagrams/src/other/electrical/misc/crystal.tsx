import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CRYSTAL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.crystal_1;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function Crystal(props: DiagramNodeProps) {
  return <Shape {...CRYSTAL} {...props} _style={extendStyle(CRYSTAL, props)} />
}
