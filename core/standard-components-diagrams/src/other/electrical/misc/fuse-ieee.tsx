import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FUSE_IEEE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_2;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function FuseIeee(props: DiagramNodeProps) {
  return (
    <Shape {...FUSE_IEEE} {...props} _style={extendStyle(FUSE_IEEE, props)} />
  )
}
