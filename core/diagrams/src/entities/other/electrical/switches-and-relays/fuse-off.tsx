import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUSE_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.fuse2;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 20,
}

export function FuseOff(props: NodeProps) {
  return (
    <Shape {...FUSE_OFF} {...props} _style={extendStyle(FUSE_OFF, props)} />
  )
}
