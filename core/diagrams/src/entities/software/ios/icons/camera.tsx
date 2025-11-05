import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAMERA = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.camera;',
  },
  _width: 30,
  _height: 17.4,
}

export function Camera(props: NodeProps) {
  return <Shape {...CAMERA} {...props} _style={extendStyle(CAMERA, props)} />
}
