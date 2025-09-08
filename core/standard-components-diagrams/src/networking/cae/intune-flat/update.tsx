import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UPDATE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.update',
  },
  _original_width: 48,
  _original_height: 50,
}

export function Update(props: DiagramNodeProps) {
  return <Shape {...UPDATE} {...props} _style={extendStyle(UPDATE, props)} />
}
