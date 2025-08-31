import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_CONTROLS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iVideoControls;barPos=20;sketch=0;',
  _width: 174,
  _height: 50,
}

export function VideoControls(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_CONTROLS}
      {...props}
      _style={extendStyle(VIDEO_CONTROLS, props)}
    />
  )
}
