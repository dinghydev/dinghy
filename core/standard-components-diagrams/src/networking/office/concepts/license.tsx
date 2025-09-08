import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LICENSE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.license;',
  },
  _original_width: 45,
  _original_height: 52,
}

export function License(props: DiagramNodeProps) {
  return <Shape {...LICENSE} {...props} _style={extendStyle(LICENSE, props)} />
}
