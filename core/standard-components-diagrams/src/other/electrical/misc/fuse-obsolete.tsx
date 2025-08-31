import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUSE_OBSOLETE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_3;',
  },
  _width: 100,
  _height: 12,
}

export function FuseObsolete(props: DiagramNodeProps) {
  return (
    <Shape
      {...FUSE_OBSOLETE}
      {...props}
      _style={extendStyle(FUSE_OBSOLETE, props)}
    />
  )
}
