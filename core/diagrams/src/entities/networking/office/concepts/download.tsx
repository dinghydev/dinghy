import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOWNLOAD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.download;',
  },
  _original_width: 48,
  _original_height: 56,
}

export function Download(props: DiagramNodeProps) {
  return (
    <Shape {...DOWNLOAD} {...props} _style={extendStyle(DOWNLOAD, props)} />
  )
}
