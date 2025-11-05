import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORSIMPLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storsimple;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Storsimple(props: NodeProps) {
  return (
    <Shape {...STORSIMPLE} {...props} _style={extendStyle(STORSIMPLE, props)} />
  )
}
