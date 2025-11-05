import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATTACHMENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.attachment;',
  },
  _width: 22,
  _height: 44,
}

export function Attachment(props: NodeProps) {
  return (
    <Shape {...ATTACHMENT} {...props} _style={extendStyle(ATTACHMENT, props)} />
  )
}
