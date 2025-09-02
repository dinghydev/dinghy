import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUSE_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.fuse2;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function FuseOn(props: DiagramNodeProps) {
  return <Shape {...FUSE_ON} {...props} _style={extendStyle(FUSE_ON, props)} />
}
