import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_IOS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.application_ios;',
  },
  _original_width: 59,
  _original_height: 49,
}

export function ApplicationIos(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_IOS}
      {...props}
      _style={extendStyle(APPLICATION_IOS, props)}
    />
  )
}
