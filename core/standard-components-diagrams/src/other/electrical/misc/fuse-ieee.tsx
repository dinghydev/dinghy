import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUSE_IEEE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_2;',
  },
  _width: 100,
  _height: 20,
}

export function FuseIeee(props: DiagramNodeProps) {
  return (
    <Shape {...FUSE_IEEE} {...props} _style={extendStyle(FUSE_IEEE, props)} />
  )
}
