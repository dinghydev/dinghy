import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIGGERS = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.triggers;fillColor=#0078D7;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function Triggers(props: DiagramNodeProps) {
  return (
    <Shape {...TRIGGERS} {...props} _style={extendStyle(TRIGGERS, props)} />
  )
}
