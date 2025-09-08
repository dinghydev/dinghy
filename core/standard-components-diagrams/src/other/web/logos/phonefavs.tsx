import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHONEFAVS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.phonefavs',
  },
  _original_width: 64.4,
  _original_height: 78.80000000000001,
}

export function Phonefavs(props: DiagramNodeProps) {
  return (
    <Shape {...PHONEFAVS} {...props} _style={extendStyle(PHONEFAVS, props)} />
  )
}
