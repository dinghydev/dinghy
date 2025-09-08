import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FUSE_IEC = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_1;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function FuseIec(props: DiagramNodeProps) {
  return (
    <Shape {...FUSE_IEC} {...props} _style={extendStyle(FUSE_IEC, props)} />
  )
}
