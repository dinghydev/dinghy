import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORIENTATION_LOCK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;strokeWidth=2;strokeColor=#0080F0;fillColor=strokeColor;shadow=0;dashed=0;shape=mxgraph.ios7.icons.orientation_lock;pointerEvents=1',
  },
  _width: 23.099999999999998,
  _height: 21,
}

export function OrientationLock(props: NodeProps) {
  return (
    <Shape
      {...ORIENTATION_LOCK}
      {...props}
      _style={extendStyle(ORIENTATION_LOCK, props)}
    />
  )
}
