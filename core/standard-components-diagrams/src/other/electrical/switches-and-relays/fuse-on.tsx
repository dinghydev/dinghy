import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUSE_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.fuse2;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function FuseOn(props: DiagramNodeProps) {
  return <Shape {...FUSE_ON} {...props} />
}
