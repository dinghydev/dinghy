import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOSPITAL = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.hospital;',
  },
  _original_width: 50,
  _original_height: 44.2,
}

export function Hospital(props: DiagramNodeProps) {
  return (
    <Shape {...HOSPITAL} {...props} _style={extendStyle(HOSPITAL, props)} />
  )
}
