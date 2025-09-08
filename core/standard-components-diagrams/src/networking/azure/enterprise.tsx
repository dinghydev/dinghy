import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTERPRISE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.enterprise;pointerEvents=1;',
  },
  _original_width: 30,
  _original_height: 50,
}

export function Enterprise(props: DiagramNodeProps) {
  return (
    <Shape {...ENTERPRISE} {...props} _style={extendStyle(ENTERPRISE, props)} />
  )
}
