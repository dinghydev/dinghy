import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_CONTROLS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iVideoControls;barPos=20;sketch=0;',
  },
  _width: 174,
  _height: 50,
}

export function VideoControls(props: NodeProps) {
  return (
    <Shape
      {...VIDEO_CONTROLS}
      {...props}
      _style={extendStyle(VIDEO_CONTROLS, props)}
    />
  )
}
