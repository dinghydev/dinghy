import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FUSE_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.fuse2;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function FuseOff(props: DiagramNodeProps) {
  return (
    <Shape {...FUSE_OFF} {...props} _style={extendStyle(FUSE_OFF, props)} />
  )
}
