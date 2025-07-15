import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUSE_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.fuse2;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 20,
}

export function FuseOff(props: DiagramNodeProps) {
  return <Shape {...FUSE_OFF} {...props} />
}
