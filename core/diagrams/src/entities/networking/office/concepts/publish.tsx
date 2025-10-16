import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUBLISH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.publish;',
  },
  _original_width: 57,
  _original_height: 48,
}

export function Publish(props: DiagramNodeProps) {
  return <Shape {...PUBLISH} {...props} _style={extendStyle(PUBLISH, props)} />
}
