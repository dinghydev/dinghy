import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_ANDROID = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.application_android;',
  },
  _original_width: 60,
  _original_height: 51,
}

export function ApplicationAndroid(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_ANDROID}
      {...props}
      _style={extendStyle(APPLICATION_ANDROID, props)}
    />
  )
}
