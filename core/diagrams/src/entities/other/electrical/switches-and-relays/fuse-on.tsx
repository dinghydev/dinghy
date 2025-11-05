import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUSE_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.fuse2;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 20,
}

export function FuseOn(props: NodeProps) {
  return <Shape {...FUSE_ON} {...props} _style={extendStyle(FUSE_ON, props)} />
}
